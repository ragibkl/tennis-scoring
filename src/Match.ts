import { getSetWinner, shouldEnterTieBreak } from './utils';
import { Game } from './Game';
import { TieBreakGame } from './TieBreakGame';
import { Player } from './types';

export class Match {
  game: Game | TieBreakGame = new Game();
  playerOne = 0
  playerTwo = 0

  pointWonBy = (player: Player): Player | null => {
    if (this.winner()) {
      return this.winner();
    }

    this.game.pointWonBy(player);
    const gameWinner = this.game.winner();
    if (!gameWinner) {
      return;
    }

    if (gameWinner === 'player 1') {
      this.playerOne += 1;
    } else {
      this.playerTwo += 1;
    }

    if (shouldEnterTieBreak(this.playerOne, this.playerTwo)) {
      this.game = new TieBreakGame();
    } else {
      this.game = new Game();
    }

    return this.winner();
  }

  score = (): string => {
    const setScore = `${this.playerOne}-${this.playerTwo}`;
    const currentGameScore = this.game.score();
    return [setScore, currentGameScore].filter(v => !!v).join(', ');
  }

  winner = (): Player | null => {
    return getSetWinner(this.playerOne, this.playerTwo);
  }
}
