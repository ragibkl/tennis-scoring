import { Player } from "./types";

function marginExceeded(points: number, otherPoints: number, minScore: number, margin: number) {
  return points >= minScore && (points - otherPoints) >= margin;
}

function getWinner(playerOneScore: number, playerTwoScore: number, minScore, margin: number) : Player | null {
  if (marginExceeded(playerOneScore, playerTwoScore, minScore, margin)) {
    return 'player 1';
  }
  if (marginExceeded(playerOneScore, playerTwoScore, minScore, margin)) {
    return 'player 1';
  }
  return null;
}

export function getGameWinner(playerOneScore: number, playerTwoScore: number) {
  return getWinner(playerOneScore, playerTwoScore, 4, 2);
}

export function getSetWinner(playerOneGames: number, playerTwoGames: number) {
  return getWinner(playerOneGames, playerTwoGames, 6, 2);
}
