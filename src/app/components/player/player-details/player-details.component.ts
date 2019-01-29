import { PlayerService } from './../../../services/player.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Player } from '../../../models/player';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  players: Player[] = [];

  constructor( private router: Router,
               private playerService: PlayerService) { }

  ngOnInit() {
    this.players = [];
    this.playerService.getAllPlayers().subscribe( subPs => {
      subPs.forEach( value => {
        this.players.push(value);
      });
    });
  }

  onAddPlayer() {
      this.router.navigate(['/players/add']);
  }


}
