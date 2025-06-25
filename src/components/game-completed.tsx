import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { TrophyIcon } from 'lucide-react';
import { useEffect } from 'react';
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
  useEffect(() => {
    // Create the confetti effect
    const createConfetti = () => {
      const confetti = document.createElement('div');
      confetti.innerHTML = '🎊';
      confetti.style.position = 'fixed';
      confetti.style.zIndex = '1000';
      confetti.style.fontSize = '20px';
      confetti.style.pointerEvents = 'none';
      confetti.style.animation = 'confetti 3s linear forwards';
      confetti.style.top = '-30px';
      confetti.style.left = Math.random() * 100 + 'vw';

      document.body.appendChild(confetti);

      setTimeout(() => {
        confetti.remove();
      }, 3000);
    };

    // Create the confetti animation
    const confetti = document.createElement('style');
    confetti.textContent = `
      @keyframes confetti {
        0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
      }
    `;
    document.head.appendChild(confetti);

    // Create multiple confetti pieces
    for (let i = 0; i < 20; i++) {
      setTimeout(() => createConfetti(), i * 200);
    }

    return () => {
      confetti.remove();
    };
  }, []);

  return (
    <AlertDialog open>
      <AlertDialogContent className="border-white/20 bg-violet-800 bg-gradient-to-br from-fuchsia-800 to-violet-600">
        <AlertDialogHeader>
          <TrophyIcon className="m-auto h-10 w-10 stroke-amber-400" />
          <AlertDialogTitle className="text-center text-3xl text-pink-100">
            Congratulations!
          </AlertDialogTitle>
          <VisuallyHidden>
            <AlertDialogDescription className="text-center">
              Completed in {turns} turns.
            </AlertDialogDescription>
          </VisuallyHidden>
        </AlertDialogHeader>

        <p className="text-center text-xl text-violet-100">{message || 'Nice work you did it.'}</p>

        <div className="mb-6 rounded-2xl border border-white/20 bg-white/40 p-4 text-center">
          <p className="font-bold">Completed in {turns} turns</p>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel type="button" onClick={onExit} className="bg-violet-200">
            Exit
          </AlertDialogCancel>
          <AlertDialogAction type="button" onClick={onReplay}>
            Replay
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
