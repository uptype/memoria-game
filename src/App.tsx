import { useEffect, useState } from 'react';
import { GameBoard } from './components/game-board';
import { GameBoardStats } from './components/game-board-stats';
import { GameCompleted } from './components/game-completed';
import { GameHelp } from './components/game-help';
import { GameSetup } from './components/game-setup';
import { GameTitle } from './components/game-title';
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
    <div className={'container mx-auto flex min-h-svh flex-col items-center gap-8 px-4 py-2'}>
      <div className={`${gameInPlay ? 'mt-2' : 'mt-16'} transition-all duration-200 ease-in`}>
        <GameTitle />
      </div>

      {!gameInPlay && (
        <p
          className={`font-sour-gummy mx-8 mb-4 text-center text-3xl leading-[1.3] font-bold text-violet-950 ${gameInPlay ? 'hidden' : 'block'}`}
        >
          Ready to challenge <span className="block md:inline">your brain?</span>
        </p>
      )}

      {!gameInPlay && (
        <>
          <GameSetup onStartGame={startGame} buttonLabel="Start" />
          <GameHelp />
        </>
      )}

      {gameInPlay && (
        <div className="flex w-full flex-col gap-4">
          <GameBoardStats
            turns={gameState.turns}
            matchedPairs={gameState.matchedPairs}
            totalPairs={gameState.maxNumber}
            flippedCardsLength={gameState.flippedCards.length}
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
