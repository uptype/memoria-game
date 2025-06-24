import { BowArrowIcon, LogOutIcon, RotateCcwIcon, TargetIcon } from 'lucide-react';
import { Button } from './button';

interface GameBoardStatsProps {
  turns: number;
  matchedPairs: number;
  totalPairs: number;
  flippedCardsLength: number;
  onReset: () => void;
  onQuit: () => void;
}

export function GameBoardStats({
  turns,
  matchedPairs,
  totalPairs,
  flippedCardsLength,
  onReset,
  onQuit,
}: GameBoardStatsProps) {
  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/20 p-4 backdrop-blur-sm sm:flex-row">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-violet-950">
          <BowArrowIcon />
          <span className="font-semibold">
            Turns: <b>{turns}</b>
          </span>
        </div>
        <div className="flex items-center gap-2 text-violet-950">
          <TargetIcon />
          <span className="font-semibold">
            Matched:{' '}
            <b>
              {matchedPairs} / {totalPairs}
            </b>
          </span>
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          onClick={onReset}
          variant={'subtle'}
          disabled={turns === 0 && flippedCardsLength < 1}
        >
          <RotateCcwIcon />
          Reset
        </Button>
        <Button onClick={onQuit} variant={'subtle'}>
          <LogOutIcon />
          Quit
        </Button>
      </div>
    </div>
  );
}
