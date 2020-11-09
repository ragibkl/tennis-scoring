export function playerWonGame(playerScore, otherPlayerScore) {
  return playerScore >= 4 && (playerScore - otherPlayerScore) >= 2;
}

export function playerWonSet(playerGames, otherPlayerGames) {
  return playerGames >= 6 && (playerGames - otherPlayerGames) >= 2;
}
