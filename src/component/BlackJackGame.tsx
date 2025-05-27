import React, { useState } from "react";
import "./BlackJackGame.css";

const suits = ["♠", "♥", "♦", "♣"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const getRandomCard = (): { rank: string, suit: string, value: number } => {
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const rank = ranks[Math.floor(Math.random() * ranks.length)];
  let value = parseInt(rank);
  if (isNaN(value)) {
    value = rank === "A" ? 11 : 10;
  }
  return { rank, suit, value };
};

const calculateTotal = (hand: { rank: string, suit: string, value: number }[]): number => {
  let total = hand.reduce((sum, card) => sum + card.value, 0);
  let aces = hand.filter((c) => c.rank === "A").length;
  while (total > 21 && aces > 0) {
    total -= 10;
    aces--;
  }
  return total;
};

const Card = ({ rank, suit, flipped = false, style = {}, hasStarted = false}: { rank: string; suit: string; flipped?: boolean; style?: React.CSSProperties; hasStarted?: boolean}) => {
  const isRed = suit === "♥" || suit === "♦";
  return (
    <div
      className={`card ${hasStarted ? "shrink" : ""} transition-transform transform hover:scale-110 ${flipped ? "flipped" : ""}`}
      style={style}
      >
      <div className="card-inner">
        <div className="card-front">🂠</div>
        <div className={`card-back ${isRed ? "text-red-600" : "text-black"}`}>
          <div className="text-sm font-bold absolute top-1 left-1">{rank}{suit}</div>
          <div className="text-2xl font-bold flex items-center justify-center h-full">{rank}{suit}</div>
          <div className="text-sm font-bold absolute bottom-1 right-1 rotate-180">{rank}{suit}</div>
        </div>
      </div>
    </div>
  );
};

const BlackJackGame: React.FC = () => {
  const [playerHand, setPlayerHand] = useState<{ rank: string; suit: string; value: number }[]>([]);
  const [dealerHand, setDealerHand] = useState<{ rank: string; suit: string; value: number }[]>([]);
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [hasStarted, setHasStarted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const startGame = () => {
    const player = [getRandomCard(), getRandomCard()];
    const dealer = [getRandomCard()];
    setPlayerHand(player);
    setDealerHand(dealer);
    setIsPlayerTurn(true);
    setMessage("");
    setHasStarted(true);
    setShowIntro(false);
  };

  const handleHit = () => {
    const newHand = [...playerHand, getRandomCard()];
    setPlayerHand(newHand);
    const total = calculateTotal(newHand);
    if (total > 21) {
      setMessage("You busted! Dealer wins.");
      setIsPlayerTurn(false);
    }
  };

  const handleStand = () => {
    setIsPlayerTurn(false);
    let dealer = [...dealerHand];
    while (calculateTotal(dealer) < 17) {
      dealer.push(getRandomCard());
    }
    setDealerHand(dealer);

    const playerTotal = calculateTotal(playerHand);
    const dealerTotal = calculateTotal(dealer);

    if (dealerTotal > 21 || playerTotal > dealerTotal) {
      setMessage("You win!");
    } else if (playerTotal < dealerTotal) {
      setMessage("Dealer wins.");
    } else {
      setMessage("Push (tie).");
    }
  };

  const introCards = Array.from({ length: 7 }, (_, i) => {
    const offsetX = (i - 3) * 110;  // horizontal spacing
    const rotation = (i - 3) * 4;   // slight tilt
    const delay = i === 3 ? 7 : i;  // center card last
    const isCenter = i === 3;

    return (
      <div
        key={i}
        className="absolute animate-slide-in"
        style={{
          top: "100%",
          left: "50%",
          transform: `translate(-50%, 0) translateX(${offsetX}px) rotate(${rotation}deg)`,
          zIndex: isCenter ? 10 : i,
          animationDelay: `${delay * 0.1}s`,
          animationFillMode: "forwards",
        }}
      >
        <Card
          rank=""
          suit=""
          flipped={isCenter}
          hasStarted={false}
        />
        {isCenter && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto">
            <h2 className="text-white text-2xl font-bold mb-2 text-center drop-shadow-lg">
              Blackjack Simulator
            </h2>
            <button
              onClick={startGame}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Start
            </button>
          </div>
        )}
      </div>
    );
  });


  return (
    <div className="relative flex flex-col items-center justify-center p-4 pointer-events-auto min-h-[600px] w-full max-w-[480px] overflow-visible">
      {showIntro ? (
        <div className="relative w-full h-full">{introCards}</div>
      ) : (
        <>
          {showIntro && (
            <h1 className="text-3xl font-bold mb-4 text-white">Blackjack Simulator</h1>
          )}
          <div className="mb-2 text-white">Dealer Hand:</div>
          <div className="flex mb-4 transition-group">
            {dealerHand.map((card, idx) => (
              <Card key={idx} rank={card.rank} suit={card.suit} flipped={true} hasStarted={hasStarted} />
            ))}
          </div>
          <div className="mb-2 text-white">Player Hand:</div>
          <div className="flex mb-2 transition-group">
            {playerHand.map((card, idx) => (
              <Card key={idx} rank={card.rank} suit={card.suit} flipped={true} hasStarted={hasStarted} />
            ))}
          </div>
          <div className="mb-4 text-white">Total: {calculateTotal(playerHand)}</div>

          {isPlayerTurn && (
            <div className="flex gap-4 mb-4">
              <button
                onClick={handleHit}
                className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded font-bold"
              >
                Hit
              </button>
              <button
                onClick={handleStand}
                className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded font-bold"
              >
                Stand
              </button>
            </div>
          )}

          {message && (
            <>
              <div className="text-xl font-semibold mb-2 text-white">{message}</div>
              <button
                onClick={startGame}
                className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded font-bold"
              >
                Play Again
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BlackJackGame;

