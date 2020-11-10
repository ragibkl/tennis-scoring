export type Player = 'player 1' | 'player 2';

export interface Game {
    pointWonBy(player: Player);
};
