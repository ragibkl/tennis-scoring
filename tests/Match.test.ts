import { Match } from '../src/Match';

describe('Match class', () => {
  describe('When points won by both players', () => {
    it('should return appropriate scores', () => {
      const match = new Match();
      match.pointWonBy("player 1");
      match.pointWonBy("player 2");
      expect(match.score()).toEqual('0-0, 15-15');
    });
  })

  describe('When points won by both players, extended tests', () => {
    it('should return appropriate scores', () => {
      const match = new Match();
      
      match.pointWonBy("player 1");
      match.pointWonBy("player 2");
      // this will return "0-0, 15-15"
      expect(match.score()).toEqual('0-0, 15-15');

      match.pointWonBy("player 1");
      match.pointWonBy("player 1");
      // this will return "0-0, 40-15"
      expect(match.score()).toEqual('0-0, 40-15');

      match.pointWonBy("player 2");
      match.pointWonBy("player 2");
      // this will return "0-0, Deuce"
      expect(match.score()).toEqual('0-0, Deuce');

      match.pointWonBy("player 1");
      // this will return "0-0, Advantage player 1"
      expect(match.score()).toEqual('0-0, Advantage player 1');

      match.pointWonBy("player 1");
      // this will return "1-0"
      expect(match.score()).toEqual('1-0');
    })
  })
})
