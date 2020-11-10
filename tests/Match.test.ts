import { Match } from '../src/Match';
import { Game } from '../src/Game';
import { TieBreakGame } from '../src/TieBreakGame';

describe('Match class', () => {
  describe('When points won by both players each', () => {
    it('should return appropriate scores', () => {
      const match = new Match();
      match.pointWonBy("player 1");
      match.pointWonBy("player 2");
      expect(match.score()).toEqual('0-0, 15-15');
    });
  })

  describe('When points won by both players, with p1 winning', () => {
    it('should return appropriate scores', () => {
      const match = new Match();

      match.pointWonBy("player 1");
      match.pointWonBy("player 2");
      expect(match.score()).toEqual('0-0, 15-15');

      match.pointWonBy("player 1");
      match.pointWonBy("player 1");
      expect(match.score()).toEqual('0-0, 40-15');

      match.pointWonBy("player 2");
      match.pointWonBy("player 2");
      expect(match.score()).toEqual('0-0, Deuce');

      match.pointWonBy("player 1");
      expect(match.score()).toEqual('0-0, Advantage player 1');

      match.pointWonBy("player 1");
      expect(match.score()).toEqual('1-0');
    })
  })

  describe('When points won by both players, with p2 winning', () => {
    it('should return appropriate scores', () => {
      const match = new Match();

      match.pointWonBy("player 2");
      match.pointWonBy("player 1");
      expect(match.score()).toEqual('0-0, 15-15');

      match.pointWonBy("player 2");
      match.pointWonBy("player 2");
      expect(match.score()).toEqual('0-0, 15-40');

      match.pointWonBy("player 1");
      match.pointWonBy("player 1");
      expect(match.score()).toEqual('0-0, Deuce');

      match.pointWonBy("player 2");
      expect(match.score()).toEqual('0-0, Advantage player 2');

      match.pointWonBy("player 2");
      expect(match.score()).toEqual('0-1');
    })
  })

  describe('When both players win 6 games', () => {
    it('should enter into tie-break', () => {
      const match = new Match();
      match.playerOne = 5;
      match.playerTwo = 6;
      expect(match.score()).toEqual('5-6');

      const game = new Game();
      game.playerOne = 3;
      game.playerTwo = 2;
      match.game = game;
      expect(match.score()).toEqual('5-6, 40-30');

      match.pointWonBy('player 1');
      expect(match.score()).toEqual('6-6');
      expect(match.game).toBeInstanceOf(TieBreakGame);

      match.pointWonBy('player 1');
      expect(match.score()).toEqual('6-6, 1-0');

      match.pointWonBy('player 1');
      expect(match.score()).toEqual('6-6, 2-0');
      expect(match.winner()).toBeNull();

      match.pointWonBy('player 1');
      match.pointWonBy('player 1');
      match.pointWonBy('player 1');
      match.pointWonBy('player 1');
      expect(match.score()).toEqual('6-6, 6-0');
      expect(match.winner()).toBeNull();

      match.pointWonBy('player 1');
      expect(match.score()).toEqual('7-6');
      expect(match.winner()).toEqual('player 1');


      match.pointWonBy('player 2');
      match.pointWonBy('player 2');
      match.pointWonBy('player 2');
      match.pointWonBy('player 2');
      expect(match.score()).toEqual('7-6');
      expect(match.winner()).toEqual('player 1');
    })
  })
})
