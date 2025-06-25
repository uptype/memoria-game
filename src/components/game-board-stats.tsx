import { BowArrowIcon, LogOutIcon, RotateCcwIcon, TargetIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from './button';
import { ConfirmAlert } from './confirm-alert';

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
  const [confirmAlertOpen, setConfirmAlertOpen] = useState(false);
  const [confirmAlertTitle, setConfirmAlertTitle] = useState('Are you sure?');
  const [confirmAlertDescription, setConfirmAlertDescription] = useState<string | undefined>();
  const [confirmAlertAction, setConfirmAlertAction] = useState<() => void>();

  const handleOpenConfirmAlertChange = (open = false) => {
    setConfirmAlertOpen(open);
  };

  const handleConfirm = () => {
    confirmAlertAction && confirmAlertAction();
  };

  const handleOpenConfirmReset = () => {
    setConfirmAlertTitle('Are you sure you want to reset the game?');
    setConfirmAlertDescription('This will reshuffle the cards and reset the score.');
    setConfirmAlertAction(() => onReset);
    setConfirmAlertOpen(true);
  };

  const handleOpenConfirmQuit = () => {
    setConfirmAlertTitle('Are you sure you want to quit the game?');
    setConfirmAlertDescription('This will return you back to the main menu.');
    setConfirmAlertAction(() => onQuit);
    setConfirmAlertOpen(true);
  };

  return (
    <>
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
            onClick={handleOpenConfirmReset}
            variant={'subtle'}
            disabled={turns === 0 && flippedCardsLength < 1}
          >
            <RotateCcwIcon />
            Reset
          </Button>
          <Button onClick={handleOpenConfirmQuit} variant={'subtle'}>
            <LogOutIcon />
            Quit
          </Button>
        </div>
      </div>

      <ConfirmAlert
        open={confirmAlertOpen}
        onOpenChange={handleOpenConfirmAlertChange}
        onConfirm={handleConfirm}
        confirmLabel="Confirm"
        cancelLabel="Cancel"
        title={confirmAlertTitle}
        description={confirmAlertDescription}
      />
    </>
  );
}
