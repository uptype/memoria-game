export interface GameCard {
  id: string;
  number: number;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameState {
  cards: GameCard[];
  flippedCards: GameCard[];
  matchedPairs: number;
  turns: number;
  isGameComplete: boolean;
  maxNumber: number;
}
