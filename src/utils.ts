export function playerWonGame(playerScore: number, otherPlayerScore: number) {
  return playerScore >= 4 && (playerScore - otherPlayerScore) >= 2;
}

export function playerWonSet(playerGames: number, otherPlayerGames: number) {
  return playerGames >= 6 && (playerGames - otherPlayerGames) >= 2;
}
