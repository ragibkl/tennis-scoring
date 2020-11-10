export type Player = 'player 1' | 'player 2';

export interface GameInterface {
  pointWonBy(player: Player): void;
  score(): string;
  winner(): Player | null;
}
