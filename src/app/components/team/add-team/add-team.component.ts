import { TeamListComponent } from './../team-list/team-list.component';
import { TeamComponent } from './../team.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from './../../../services/player.service';
import { Player } from './../../../models/player';
import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Team } from '../../../models/team';
import { TeamService } from '../../../services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit, OnChanges {

  team: Team = new Team();
  players: Player[] = [];
  teams: Team[] = [];
  id: number;
  playerlist:[];
  subscription:  Subscription;
  isSuccess: Boolean = false;
  isTouched: Boolean = false;
  selectedPlayer: Player;

  constructor( private playerService: PlayerService,
               private teamService: TeamService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
    this.players = [];
    this.isTouched = false;
    this.isSuccess = false;
    this.playerService.getPlayersByNoTeam().subscribe( (subplayers) => {
      subplayers.forEach(value => {
        this.players.push(value);
      });
      
     
    });
   this.subscription = this.route.url.subscribe(v => {
      v.forEach(ur => {
        if (ur.path === 'edit') {
            this.route.params.subscribe( subParam => {
                this.id = subParam['id'];
                this.teamService.getTeam(this.id).subscribe( (tm) => {
                    this.team = tm.result.teamDetails;
                    this.playerlist= tm.result.player;
                });
            });
        } else if (ur.path === 'add') {
          this.team = new Team();
        }
      });
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes - add team');
    console.log( changes );
    this.ngOnInit();
  }

  onSelectCheckBox(player: Player, evt) {
    if (this.team.players === undefined) {
      this.team.players = [];
    }
    if (evt.target.checked) {
      this.team.players.push(player);
    } else {
      this.team.players.forEach( (value, index) => {
          if (value.playerName === player.playerName) {
            this.team.players.splice(index, 1);
          }
      });
    }
  }

  onSaveTeam() {
    this.isTouched = true;
    this.teamService.saveTeam(this.team).subscribe(
      () => {},
      () => { console.log('error occired');
        this.isSuccess = false;
      },
      () => {
        console.log('completed');
        this.isSuccess = true;
        this.teams = [];
         this.teamService.getTeams().subscribe( ts => {
          ts.forEach(value => {
            this.teams.push(value);
          });
        });
        this.router.navigate(['/teams'], { queryParams: { isChanged: '1'}, queryParamsHandling: 'merge'});
      }
    );
  }

  onDeletePlayer(player: Player) {
    this.selectedPlayer = player;
  }

  onDeletePlayerYes() {
    this.team.players.forEach( (value, index) => {
      if (this.selectedPlayer.id === value.id) {
          this.team.players.splice(index, 1);
      }
    });
    this.selectedPlayer.team = null;
    this.playerService.savePlayer(this.selectedPlayer);
    this.router.navigate(['/teams/edit', this.team.id]);
    console.log('delete player clicked ');
  }
}
