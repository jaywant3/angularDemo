import { Player } from './player';

export class Team {
  id: number;
  team: string;
  description: string;
  owner: string;
  totalPlayed?: number;
  totalWon?: number;
  totalLost?: number;
  noResult?: number;
  players: Player[];
}
