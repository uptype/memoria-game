import type { GameCard } from '../types/game-types';

interface GameBoardCardProps {
  card: GameCard;
  onClick: (card: GameCard) => void;
  isDisabled?: boolean;
}

export function GameBoardCard({ card, onClick, isDisabled }: GameBoardCardProps) {
  const handleClick = () => {
    if (!isDisabled && !card.isFlipped && !card.isMatched) {
      onClick(card);
    }
  };

  return (
    // <div className="flex justify-center border-gray-900 bg-gray-700 p-3 align-middle text-3xl text-gray-50">
    //   {card.number}
    // </div>

    <div
      className={`relative min-h-20 min-w-20 flex-initial cursor-pointer transition-all duration-300 ${isDisabled || card.isMatched ? 'cursor-not-allowed' : 'hover:scale-105'} ${card.isMatched ? 'opacity-75' : ''} `}
      onClick={handleClick}
    >
      <div
        className={`transform-style-preserve-3d relative h-full w-full transition-transform duration-500 ${card.isFlipped || card.isMatched ? 'rotate-y-180' : ''} `}
      >
        {/* Card Back */}
        <div className="absolute inset-0 h-full w-full backface-hidden">
          <div className="flex h-full w-full items-center justify-center rounded-xl border-2 border-white/20 bg-gradient-to-br from-gray-900 via-gray-600 to-gray-800 text-5xl text-gray-800/70 shadow-lg">
            ?
          </div>
        </div>

        {/* Card Front */}
        <div className="absolute inset-0 h-full w-full rotate-y-180 backface-hidden">
          <div
            className={`flex h-full w-full items-center justify-center rounded-xl border-2 border-white/40 text-2xl font-bold shadow-lg ${
              card.isMatched ? 'bg-green-400 text-white' : 'bg-white text-gray-800'
            } `}
          >
            {card.number}
          </div>
        </div>
      </div>
    </div>
  );
}
