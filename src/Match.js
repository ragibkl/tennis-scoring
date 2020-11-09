// import { playerWonSet } from './utils';
import { Game } from './Game';

export class Match {
  game = new Game();
  playerOne = 0
  playerTwo = 0

  pointWonBy = (player) => {
    this.game.pointWonBy(player);

    const gameWinner = this.game.winner();
    if (gameWinner) {
      if (gameWinner == 'player 1') {
        this.playerOne += 1;
      } else {
        this.playerTwo += 1;
      }

      this.game = new Game();
    }
  }

  score = () => {
    const setScore = `${this.playerOne}-${this.playerTwo}`;
    const currentGameScore = this.game.score();

    const score = `${setScore}, ${currentGameScore}`
    console.log(score)
    return score;
  }
}
