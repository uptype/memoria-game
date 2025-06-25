import { TrophyIcon } from 'lucide-react';
import { Button } from './button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';

export function GameHelp() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'lg'} className="font-sour-gummy h-12 rotate-1 px-16 text-3xl">
          How to Play
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle asChild>
            <h2 className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-purple-600">
                <TrophyIcon className="h-6 w-6 text-white" />
              </div>
              How to Play
            </h2>
          </DialogTitle>
        </DialogHeader>

        <DialogDescription>
          <b>MEMORiA</b> is a classic card matching game that tests your memory and concentration.
          Follow these simple steps to become a master!
        </DialogDescription>

        <ol className="text-left text-sm">
          <li>
            Click the 'Start' button and choose the number of pairs you want to try and match, then
            select the 'Play Game' button
          </li>
          <li>
            Click on any face-down card to reveal a number, now try and match the number on the
            first selected card by selecting a second card
          </li>
          <li>
            If the cards match, they'll stay face-up and turn green, otherwise they will be turned
            back over
          </li>
          <li>Match all pairs to complete the game. Try to do it in as few turns as possible</li>
          <li>
            Use the 'Reset' button at anytime to start the game over with the same number of cards,
            or choose 'Quit' to return to the main menu
          </li>
        </ol>
      </DialogContent>
    </Dialog>
  );
}
