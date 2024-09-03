import React, { useEffect, useRef } from 'react';

const BLOCK_SIZE = 30; // Slightly smaller blocks to fit more
const BOARD_WIDTH = 10; // Increased width
const BOARD_HEIGHT = 20;

type Piece = {
  shape: number[][];
  x: number;
  y: number;
  color: string;
};

const TetrisGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const currentPieceRef = useRef<Piece | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Game state
    let board = Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(0));
    let colors = Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(''));

    // Tetromino shapes
    const tetrominoes: number[][][] = [
      [[1, 1, 1, 1]],
      [[1, 1], [1, 1]],
      [[1, 1, 1], [0, 1, 0]],
      [[1, 1, 1], [1, 0, 0]],
      [[1, 1, 1], [0, 0, 1]],
      [[1, 1, 0], [0, 1, 1]],
      [[0, 1, 1], [1, 1, 0]],
    ];

    // Colors
    const colorPalette = ['rgb(219,169,246)', 'rgb(225,245,109)', 'rgb(157,220,206)', 'rgb(125,87,246)'];

    // Initialize a new piece
    function createPiece(): Piece {
      const shape = tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      return {
        shape,
        x: Math.floor(BOARD_WIDTH / 2) - Math.floor(shape[0].length / 2),
        y: 0,
        color,
      };
    }

    // Start a new game
    function startNewGame() {
      board = Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(0));
      colors = Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(''));
      currentPieceRef.current = createPiece();
    }

    // Game loop
    const intervalId = setInterval(() => {
      update();
      draw();
    }, 500); // Move down every 500ms

    // Update game state
    function update() {
      if (!currentPieceRef.current) {
        currentPieceRef.current = createPiece();
      }

      // Move piece down
      currentPieceRef.current.y++;

      if (collision()) {
        currentPieceRef.current.y--;
        mergePiece();
        checkLines();
        currentPieceRef.current = createPiece();

        // Check if the new piece collides immediately (game over)
        if (collision()) {
          startNewGame();
        }
      }
    }

    // Draw game state
    function draw() {
      // Clear canvas and set background color
      ctx.fillStyle = 'rgb(61,51,153)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw board
      for (let y = 0; y < BOARD_HEIGHT; y++) {
        for (let x = 0; x < BOARD_WIDTH; x++) {
          if (board[y][x]) {
            ctx.fillStyle = colors[y][x];
            ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
            ctx.strokeStyle = 'white';
            ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
          } else {
            ctx.strokeStyle = 'rgba(255,255,255,0.2)';
            ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
          }
        }
      }

      // Draw current piece
      if (currentPieceRef.current) {
        ctx.fillStyle = currentPieceRef.current.color;
        currentPieceRef.current.shape.forEach((row, y) => {
          row.forEach((value, x) => {
            if (value) {
              ctx.fillRect(
                (currentPieceRef.current!.x + x) * BLOCK_SIZE,
                (currentPieceRef.current!.y + y) * BLOCK_SIZE,
                BLOCK_SIZE,
                BLOCK_SIZE
              );
              ctx.strokeStyle = 'white';
              ctx.strokeRect(
                (currentPieceRef.current!.x + x) * BLOCK_SIZE,
                (currentPieceRef.current!.y + y) * BLOCK_SIZE,
                BLOCK_SIZE,
                BLOCK_SIZE
              );
            }
          });
        });
      }
    }

    // Check for collisions
    function collision(): boolean {
      if (!currentPieceRef.current) return false;
      return currentPieceRef.current.shape.some((row, y) =>
        row.some((value, x) =>
          value &&
          (board[y + currentPieceRef.current!.y] &&
            board[y + currentPieceRef.current!.y][x + currentPieceRef.current!.x]) !== 0
        )
      );
    }

    // Merge piece with board
    function mergePiece() {
      if (!currentPieceRef.current) return;
      currentPieceRef.current.shape.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value) {
            board[y + currentPieceRef.current!.y][x + currentPieceRef.current!.x] = value;
            colors[y + currentPieceRef.current!.y][x + currentPieceRef.current!.x] = currentPieceRef.current.color;
          }
        });
      });
    }

    // Check for completed lines
    function checkLines() {
      for (let y = BOARD_HEIGHT - 1; y >= 0; y--) {
        if (board[y].every(cell => cell)) {
          board.splice(y, 1);
          board.unshift(Array(BOARD_WIDTH).fill(0));
          colors.splice(y, 1);
          colors.unshift(Array(BOARD_WIDTH).fill(''));
        }
      }
    }

    // Handle key presses
    function handleKeyPress(e: KeyboardEvent) {
      if (!currentPieceRef.current) return;

      if (e.key === 'a') currentPieceRef.current.x--;
      if (e.key === 'd') currentPieceRef.current.x++;
      if (e.key === 'Shift') {
        const rotated = currentPieceRef.current.shape[0].map((_, index) =>
          currentPieceRef.current.shape.map(row => row[index]).reverse()
        );
        if (!collision()) currentPieceRef.current.shape = rotated;
      }
      if (e.key === 's') {
        while (!collision()) {
          currentPieceRef.current.y++;
        }
        currentPieceRef.current.y--; // Move back up one step after collision
      }

      if (collision()) {
        if (e.key === 'a') currentPieceRef.current.x++;
        if (e.key === 'd') currentPieceRef.current.x--;
      }
    }

    document.addEventListener('keydown', handleKeyPress);

    startNewGame(); // Start the game initially

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '20px' }}>
      <canvas ref={canvasRef} width={BLOCK_SIZE * BOARD_WIDTH} height={BLOCK_SIZE * BOARD_HEIGHT} />
    </div>
  );
};

export default TetrisGame;