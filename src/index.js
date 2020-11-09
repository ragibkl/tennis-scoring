import { Match } from './Match'

const match = new Match()

match.pointWonBy("player 1");
match.pointWonBy("player 2");
// this will return "0-0, 15-15"
match.score();

match.pointWonBy("player 1");
match.pointWonBy("player 1");
// this will return "0-0, 40-15"
match.score();

match.pointWonBy("player 2");
match.pointWonBy("player 2");
// this will return "0-0, Deuce"
match.score();
match.pointWonBy("player 1");
// this will return "0-0, Advantage player 1"
match.score();

match.pointWonBy("player 1");
// this will return "1-0"
match.score();
