import type { GameCard } from '../types/game-types';
import { GameBoardCard } from './game-board-card';

interface GameBoardProps {
  cards: GameCard[];
  onCardClick: (card: GameCard) => void;
  isBoardDisabled: boolean;
}

export function GameBoard({ cards, onCardClick, isBoardDisabled }: GameBoardProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {cards.map((card) => (
        <GameBoardCard
          key={card.id}
          onClick={onCardClick}
          card={card}
          isDisabled={isBoardDisabled}
        />
      ))}
    </div>
  );
}
