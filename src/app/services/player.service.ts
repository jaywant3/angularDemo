import { Player } from './../models/player';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayersByNoTeam() {
    return this.http.get<Player[]>('http://localhost/startrail.in/players/api/findMultiple/0');
  }

  savePlayer(player: Player) {
    this.http.post('http://localhost/startrail.in/players/api/create', player).subscribe();
  }

  getAllPlayers() {
    return this.http.get<Player[]>('http://localhost/startrail.in/players/api/findMultiple');
  }
}
