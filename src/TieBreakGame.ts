import { getTieBreakWinner } from './utils'
import { Player, GameInterface } from './types';

export class TieBreakGame implements GameInterface {
  playerOne = 0;
  playerTwo = 0;

  pointWonBy = (player: Player) => {
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
    if (!this.playerOne && !this.playerTwo) {
      return '';
    }
    return `${this.playerOne}-${this.playerTwo}`;
  }

  winner = (): Player | null => {
    return getTieBreakWinner(this.playerOne, this.playerTwo);
  }
}
