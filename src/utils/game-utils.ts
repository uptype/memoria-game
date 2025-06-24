import type { GameCard } from '../types/game-types';

export const createCards = (maxNumber: number): GameCard[] => {
  const cards: GameCard[] = [];

  // Create pairs of cards
  for (let i = 1; i <= maxNumber; i++) {
    // First card of the pair
    cards.push({
      id: `${i}-1`,
      number: i,
      isFlipped: false,
      isMatched: false,
    });

    // Second card of the pair
    cards.push({
      id: `${i}-2`,
      number: i,
      isFlipped: false,
      isMatched: false,
    });
  }

  // Shuffle the cards
  return shuffleArray(cards);
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
