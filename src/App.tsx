import { useEffect, useState } from 'react';
import { GameBoard } from './components/game-board';
import { GameBoardStats } from './components/game-board-stats';
import { GameCompleted } from './components/game-completed';
import { GameSetup } from './components/game-setup';
import type { GameCard, GameState } from './types/game-types';
import { createCards } from './utils/game-utils';

function App() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [gameState, setGameState] = useState<GameState>({
    cards: [],
    flippedCards: [],
    matchedPairs: 0,
    turns: 0,
    isGameComplete: false,
    maxNumber: 0,
  });
  const [gameInPlay, setGameInPlay] = useState(false);

  const startGame = (maxNumber: number) => {
    const cards = createCards(maxNumber);
    setGameState({
      cards,
      flippedCards: [],
      matchedPairs: 0,
      turns: 0,
      isGameComplete: false,
      maxNumber,
    });
    setGameInPlay(true);
  };

  const resetGame = () => {
    if (gameState.maxNumber > 0) {
      startGame(gameState.maxNumber);
    }
  };

  const newGame = () => {
    setGameInPlay(false);
    setGameState({
      cards: [],
      flippedCards: [],
      matchedPairs: 0,
      turns: 0,
      isGameComplete: false,
      maxNumber: 0,
    });
  };

  const handleCardClick = (selectedCard: GameCard) => {
    if (isProcessing || selectedCard.isMatched || selectedCard.isFlipped) {
      return;
    }

    setGameState((prev) => {
      const updatedCards = prev.cards.map((card) =>
        card.id === selectedCard.id ? { ...card, isFlipped: true } : card,
      );

      const newFlippedCards = [...prev.flippedCards, selectedCard];

      return {
        ...prev,
        cards: updatedCards,
        flippedCards: newFlippedCards,
      };
    });
  };

  useEffect(() => {
    if (gameState.flippedCards.length === 2) {
      setIsProcessing(true);

      const [firstCard, secondCard] = gameState.flippedCards;
      const isMatch = firstCard.number === secondCard.number;

      setTimeout(() => {
        setGameState((prev) => {
          const updatedCards = prev.cards.map((card) => {
            if (isMatch && (card.id === firstCard.id || card.id === secondCard.id)) {
              return { ...card, isMatched: true, isFlipped: true };
            } else if (!isMatch && (card.id === firstCard.id || card.id === secondCard.id)) {
              return { ...card, isFlipped: false };
            }
            return card;
          });

          const newMatchedPairs = isMatch ? prev.matchedPairs + 1 : prev.matchedPairs;
          const newTurns = prev.turns + 1;
          const isGameComplete = newMatchedPairs === prev.maxNumber;

          return {
            ...prev,
            cards: updatedCards,
            flippedCards: [],
            matchedPairs: newMatchedPairs,
            turns: newTurns,
            isGameComplete,
          };
        });

        setIsProcessing(false);
      }, 1000);
    }
  }, [gameState.flippedCards]);

  return (
    <div className={'container mx-auto flex min-h-svh flex-col items-center gap-4 p-2'}>
      <h1 className="mt-4 stroke-white font-extrabold text-gray-900 text-shadow-2xs text-shadow-violet-400">
        MEMORiA
      </h1>

      <div
        // rounded-lg border border-white/20 bg-white/10
        className={`mb-4 flex-col items-center gap-2 p-4 text-center sm:max-w-9/12 ${gameInPlay ? 'hidden' : 'flex'}`}
      >
        <p>
          Test your memory and concentration with this fun and simple game. Flip the cards to reveal
          hidden numbers and try to find all the matching pairs of numbers in the fewest moves
          possible.
        </p>
        <p className="font-bold">Ready to challenge your brain? Good luck!</p>
      </div>

      {!gameInPlay && <GameSetup onStartGame={startGame} buttonLabel="Play Game" />}

      {gameInPlay && (
        <div className="flex w-full flex-col gap-4">
          <GameBoardStats
            turns={gameState.turns}
            matchedPairs={gameState.matchedPairs}
            totalPairs={gameState.maxNumber}
            onReset={resetGame}
            onQuit={newGame}
          />
          <GameBoard
            cards={gameState.cards}
            onCardClick={handleCardClick}
            isBoardDisabled={isProcessing || gameState.flippedCards.length >= 2}
          />
        </div>
      )}

      {gameState.isGameComplete && (
        <GameCompleted turns={gameState.turns} onReplay={resetGame} onExit={newGame} />
      )}
    </div>
  );
}

export default App;
