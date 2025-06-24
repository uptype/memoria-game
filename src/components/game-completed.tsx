import { LogOutIcon, RotateCcwIcon } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
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
        {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}

        <AlertDialogContent className="border-gray-600 bg-gray-400">
          <AlertDialogHeader>
            <AlertDialogTitle>Congratulations</AlertDialogTitle>
            <AlertDialogDescription>{message || 'Well done! Nice work!'}</AlertDialogDescription>
          </AlertDialogHeader>

          <div className="mb-6 rounded-2xl bg-white/20 p-4">
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
