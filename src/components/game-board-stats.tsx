import { BowArrowIcon, LogOutIcon, RotateCcwIcon, TargetIcon } from 'lucide-react';

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
    <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:flex-row">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-white">
          <BowArrowIcon />
          <span className="font-semibold">Turns: {turns}</span>
        </div>
        <div className="flex items-center gap-2 text-white">
          <TargetIcon />
          <span className="font-semibold">
            Matched: {matchedPairs}/{totalPairs}
          </span>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onReset}
          className="flex items-center gap-2 rounded-xl bg-white/20 px-4 py-2 text-white transition-all duration-200 hover:scale-105 hover:bg-white/30 active:scale-95"
        >
          <RotateCcwIcon />
          Reset
        </button>
        <button
          onClick={onQuit}
          className="flex items-center gap-2 rounded-xl bg-white/20 px-4 py-2 text-white transition-all duration-200 hover:scale-105 hover:bg-white/30 active:scale-95"
        >
          <LogOutIcon />
          Quit
        </button>
      </div>
    </div>
  );
}
