import { useState } from 'react';
import { Button } from './button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
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
  const [numberOfpairs, setNumberOfpairs] = useState(2); // TODO: change this to 8 ??

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (numberOfpairs > 0) {
      onStartGame(numberOfpairs);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{buttonLabel || 'Play'}</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Setup Your Game</DialogTitle>
          <DialogDescription>
            Enter the number of pairs you would like to try and match.
          </DialogDescription>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col gap-2">
              <label>Number of Pairs</label>
              <Input
                type="number"
                placeholder="Enter number"
                value={numberOfpairs}
                min={1}
                onChange={(e) => setNumberOfpairs(parseInt(e.target.value))}
              />
              <>
                This will create a game with {numberOfpairs} matching pairs ({numberOfpairs * 2}{' '}
                total cards)
              </>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" className="justify-end">
                Start Game
              </Button>
            </DialogFooter>
          </form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
