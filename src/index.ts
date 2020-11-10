// const repl = require('repl');
import * as repl from 'repl';
import { Match } from './Match'

const p1 = 'player 1';
const p2 = 'player 2';
const match = new Match()
const replInstance = repl.start('> ');

Object.assign(replInstance.context, { Match, match, p1, p2 });
