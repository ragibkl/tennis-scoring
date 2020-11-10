import { getTieBreakWinner } from './utils'
import { Player } from './types';

export class TieBreakGame {
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
    return `${this.playerOne}-${this.playerTwo}`;
  }

  winner = (): Player | null => {
    return getTieBreakWinner(this.playerOne, this.playerTwo);
  }
}
