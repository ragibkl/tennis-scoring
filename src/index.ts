import repl from 'repl';
import { Match } from './Match'

const match = new Match()
const replInstance = repl.start('> ');

Object.assign(replInstance.context, { Match });
