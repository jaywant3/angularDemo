import { PlayerService } from './../../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { Player } from '../../../models/player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  player: Player = new Player();

  constructor( private playerService: PlayerService,
               private router: Router ) { }

  ngOnInit() {
  }

  onSavePlayer() {
    console.log(this.player);
    this.playerService.savePlayer(this.player);
    this.router.navigate(['/players']);
  }

}
