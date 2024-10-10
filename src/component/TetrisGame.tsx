import React, { useEffect, useRef, useState, useCallback } from "react";

// Constants
const BLOCK_SIZE = 30;
const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;
const UPDATE_INTERVAL = 500;

// Types
type Board = number[][];
type ColorBoard = string[][];

interface Piece {
  shape: number[][];
  x: number;
  y: number;
  color: string;
}

// Game constants
const TETROMINOES: number[][][] = [
  [[1, 1, 1, 1]],
  [
    [1, 1],
    [1, 1],
  ],
  [
    [1, 1, 1],
    [0, 1, 0],
  ],
  [
    [1, 1, 1],
    [1, 0, 0],
  ],
  [
    [1, 1, 1],
    [0, 0, 1],
  ],
  [
    [1, 1, 0],
    [0, 1, 1],
  ],
  [
    [0, 1, 1],
    [1, 1, 0],
  ],
];

const COLOR_PALETTE = [
  "rgb(219,169,246)",
  "rgb(225,245,109)",
  "rgb(157,220,206)",
  "rgb(125,87,246)",
];

const TetrisGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState({
    isPaused: false,
    gameStarted: false,
    score: 0,
  });
  const gameDataRef = useRef({
    board: Array.from({ length: BOARD_HEIGHT }, () =>
      Array(BOARD_WIDTH).fill(0)
    ),
    colors: Array.from({ length: BOARD_HEIGHT }, () =>
      Array(BOARD_WIDTH).fill("")
    ),
    currentPiece: null as Piece | null,
  });

  const createPiece = useCallback(
    (): Piece => ({
      shape: TETROMINOES[Math.floor(Math.random() * TETROMINOES.length)],
      color: COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)],
      x: Math.floor(BOARD_WIDTH / 2) - 1,
      y: 0,
    }),
    []
  );

  const collision = useCallback((piece: Piece, board: Board): boolean => {
    return piece.shape.some((row, y) =>
      row.some((value, x) => value && (board[y + piece.y]?.[x + piece.x] ?? 1))
    );
  }, []);

  const mergePiece = useCallback(
    (piece: Piece, board: Board, colors: ColorBoard) => {
      piece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value) {
            board[y + piece.y][x + piece.x] = value;
            colors[y + piece.y][x + piece.x] = piece.color;
          }
        });
      });
    },
    []
  );

  const checkLines = useCallback((board: Board, colors: ColorBoard): number => {
    let linesCleared = 0;
    for (let y = BOARD_HEIGHT - 1; y >= 0; ) {
      if (board[y].every((cell) => cell)) {
        board.splice(y, 1);
        colors.splice(y, 1);
        board.unshift(Array(BOARD_WIDTH).fill(0));
        colors.unshift(Array(BOARD_WIDTH).fill(""));
        linesCleared++;
      } else {
        y--;
      }
    }
    return linesCleared;
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    const { board, colors, currentPiece } = gameDataRef.current;

    // Clear canvas
    ctx.fillStyle = "rgb(61,51,153)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw board
    for (let y = 0; y < BOARD_HEIGHT; y++) {
      for (let x = 0; x < BOARD_WIDTH; x++) {
        if (board[y][x]) {
          ctx.fillStyle = colors[y][x];
          ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
          ctx.strokeStyle = "white";
        } else {
          ctx.strokeStyle = "rgba(255,255,255,0.2)";
        }
        ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
      }
    }

    // Draw current piece
    if (currentPiece) {
      ctx.fillStyle = currentPiece.color;
      currentPiece.shape.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value) {
            const drawX = (currentPiece.x + x) * BLOCK_SIZE;
            const drawY = (currentPiece.y + y) * BLOCK_SIZE;
            ctx.fillRect(drawX, drawY, BLOCK_SIZE, BLOCK_SIZE);
            ctx.strokeStyle = "white";
            ctx.strokeRect(drawX, drawY, BLOCK_SIZE, BLOCK_SIZE);
          }
        });
      });
    }
  }, []);

  const update = useCallback(() => {
    if (gameState.isPaused) return;

    const gameData = gameDataRef.current;
    if (!gameData.currentPiece) {
      gameData.currentPiece = createPiece();
      if (collision(gameData.currentPiece, gameData.board)) {
        // Game Over
        gameData.board = Array.from({ length: BOARD_HEIGHT }, () =>
          Array(BOARD_WIDTH).fill(0)
        );
        gameData.colors = Array.from({ length: BOARD_HEIGHT }, () =>
          Array(BOARD_WIDTH).fill("")
        );
        setGameState((prev) => ({ ...prev, gameStarted: false }));
        return;
      }
    }

    gameData.currentPiece.y++;

    if (collision(gameData.currentPiece, gameData.board)) {
      gameData.currentPiece.y--;
      mergePiece(gameData.currentPiece, gameData.board, gameData.colors);
      const linesCleared = checkLines(gameData.board, gameData.colors);
      if (linesCleared) {
        setGameState((prev) => ({
          ...prev,
          score: prev.score + linesCleared * 100,
        }));
      }
      gameData.currentPiece = null;
    }
  }, [gameState.isPaused, collision, createPiece, mergePiece, checkLines]);

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      //   if (!gameState.gameStarted || gameState.isPaused) return;

      const gameData = gameDataRef.current;
      if (!gameData.currentPiece) return;

      const piece = gameData.currentPiece;
      let newPiece = { ...piece };

      switch (e.key.toLowerCase()) {
        case "a":
          newPiece.x--;
          break;
        case "d":
          newPiece.x++;
          break;
        case "s":
          while (
            !collision({ ...newPiece, y: newPiece.y + 1 }, gameData.board)
          ) {
            newPiece.y++;
          }
          break;
        case "shift": {
          const rotated = piece.shape[0].map((_, i) =>
            piece.shape.map((row) => row[i]).reverse()
          );
          newPiece = { ...piece, shape: rotated };
          break;
        }
      }

      if (!collision(newPiece, gameData.board)) {
        gameData.currentPiece = newPiece;
      }
    },
    [collision, gameState.gameStarted, gameState.isPaused]
  );

  useEffect(() => {
    const gameLoop = setInterval(() => {
      update();
      draw();
    }, UPDATE_INTERVAL);

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      clearInterval(gameLoop);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [update, draw, handleKeyPress]);

  //   const startGame = () => {
  //     gameDataRef.current = {
  //       board: Array.from({ length: BOARD_HEIGHT }, () =>
  //         Array(BOARD_WIDTH).fill(0)
  //       ),
  //       colors: Array.from({ length: BOARD_HEIGHT }, () =>
  //         Array(BOARD_WIDTH).fill("")
  //       ),
  //       currentPiece: createPiece(),
  //     };
  //     setGameState({ isPaused: false, gameStarted: true, score: 0 });
  //   };

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas
        ref={canvasRef}
        width={BLOCK_SIZE * BOARD_WIDTH}
        height={BLOCK_SIZE * BOARD_HEIGHT}
        className="border border-white"
      />
      <div className="text-lg font-bold">Score: {gameState.score}</div>
    </div>
  );
};

export default TetrisGame;
