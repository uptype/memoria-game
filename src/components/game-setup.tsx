import { useState } from 'react';
import { Button } from './button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';
import { Input } from './input';

interface GameSetupProps {
  onStartGame: (maxNumber: number) => void;
  buttonLabel?: string;
}

export function GameSetup({ onStartGame, buttonLabel }: GameSetupProps) {
  const [numberOfpairs, setNumberOfpairs] = useState(6);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (numberOfpairs > 0) {
      onStartGame(numberOfpairs);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={'lg'}
          className="font-sour-gummy h-16 rotate-358 bg-violet-800 px-24 text-4xl hover:bg-violet-900"
        >
          {buttonLabel || 'Play'}
        </Button>
      </DialogTrigger>

      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Setup Your Game</DialogTitle>
        </DialogHeader>

        <p>Enter the number of pairs you would like to try and match.</p>

        <form onSubmit={handleSubmit} className="mt-4 space-y-8">
          <div className="flex flex-col gap-2">
            <label>Number of Pairs</label>
            <Input
              type="number"
              placeholder="Enter number"
              value={numberOfpairs}
              min={1}
              onChange={(e) => setNumberOfpairs(parseInt(e.target.value))}
            />
            <p className="text-sm text-violet-950">
              This will create a game with {numberOfpairs} matching pairs ({numberOfpairs * 2} total
              cards)
            </p>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Play Game</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
