import { Player } from './types';

function marginExceeded(points: number, otherPoints: number, minScore: number, margin: number) {
  return points >= minScore && (points - otherPoints) >= margin;
}

function getWinner(playerOneScore: number, playerTwoScore: number, minScore: number, margin: number): Player | null {
  if (marginExceeded(playerOneScore, playerTwoScore, minScore, margin)) {
    return 'player 1';
  }
  if (marginExceeded(playerTwoScore, playerOneScore, minScore, margin)) {
    return 'player 2';
  }
  return null;
}

export function getGameWinner(playerOneScore: number, playerTwoScore: number): Player | null {
  return getWinner(playerOneScore, playerTwoScore, 4, 2);
}

export function getTieBreakWinner(playerOneScore: number, playerTwoScore: number): Player | null {
  return getWinner(playerOneScore, playerTwoScore, 7, 2);
}

export function getSetWinner(playerOneGames: number, playerTwoGames: number): Player | null {
  return getWinner(playerOneGames, playerTwoGames, 7, 1) // tie break game
    || getWinner(playerOneGames, playerTwoGames, 6, 2);
}

export function shouldEnterTieBreak(playerOneScore: number, playerTwoScore: number) {
  return playerOneScore === 6 && playerTwoScore === 6;
}
