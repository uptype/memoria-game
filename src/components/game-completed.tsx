import { LogOutIcon, RotateCcwIcon } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './alert-dialog';

interface GameCompletedProps {
  turns: number;
  message?: string;
  onReplay: () => void;
  onExit: () => void;
}

export function GameCompleted({ turns, message, onReplay, onExit }: GameCompletedProps) {
  return (
    <>
      <AlertDialog open>
        <AlertDialogContent className="border-white/20 bg-violet-900">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-3xl text-pink-100">Congratulations</AlertDialogTitle>
          </AlertDialogHeader>

          <p className="text-center text-violet-200 sm:text-left">
            {message || 'Well done! Nice work!'}
          </p>

          <div className="mb-6 rounded-2xl border border-white/20 bg-white/40 p-4 text-center">
            <p>Completed in {turns} turns</p>
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel type="button" onClick={onExit}>
              <LogOutIcon />
              Exit
            </AlertDialogCancel>
            <AlertDialogAction type="button" onClick={onReplay}>
              <RotateCcwIcon />
              Replay
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
