import { BowArrowIcon, LogOutIcon, RotateCcwIcon, TargetIcon } from 'lucide-react';
import { Button } from './button';

interface GameBoardStatsProps {
  turns: number;
  matchedPairs: number;
  totalPairs: number;
  onReset: () => void;
  onQuit: () => void;
}

export function GameBoardStats({
  turns,
  matchedPairs,
  totalPairs,
  onReset,
  onQuit,
}: GameBoardStatsProps) {
  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/20 p-4 backdrop-blur-sm sm:flex-row">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-violet-950">
          <BowArrowIcon />
          <span className="font-semibold">Turns: {turns}</span>
        </div>
        <div className="flex items-center gap-2 text-violet-950">
          <TargetIcon />
          <span className="font-semibold">
            Matched: {matchedPairs}/{totalPairs}
          </span>
        </div>
      </div>

      <div className="flex gap-3">
        <Button onClick={onReset}>
          <RotateCcwIcon />
          Reset
        </Button>
        <Button onClick={onQuit}>
          <LogOutIcon />
          Quit
        </Button>
      </div>
    </div>
  );
}
