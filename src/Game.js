import { playerWonGame } from './utils'

const RUNNING_SCORES = [0, 15, 30, 40]

export class Game {
  playerOne = 0;
  playerTwo = 0;

  pointWonBy = (player) => {
    if (player === 'player 1') {
      this.playerOne += 1;
      return
    }

    if (player === 'player 2') {
      this.playerTwo += 1;
      return
    }
  }

  score = () => {
    const { playerOne, playerTwo } = this;
    if (!playerOne && !playerTwo) {
      return ''
    }

    if (playerOne >= 3 && playerTwo >= 3) {
      if (playerOne > playerTwo) {
        return 'Advantage player 1'
      }

      if (playerOne < playerTwo) {
        return 'Advantage player 2'
      }

      return 'Deuce';
    }

    const scorePlayerOne = RUNNING_SCORES[playerOne]
    const scorePlayerTwo = RUNNING_SCORES[playerTwo]
    return `${scorePlayerOne}-${scorePlayerTwo}`;
  }

  winner = () => {
    if (playerWonGame(this.playerOne, this.playerTwo)) {
      return 'player 1'
    }

    if (playerWonGame(this.playerTwo, this.playerOne)) {
      return 'player 2'
    }

    return null
  }
}
