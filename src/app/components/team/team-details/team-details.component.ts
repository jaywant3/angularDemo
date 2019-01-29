import { Team } from './../../../models/team';
import { TeamService } from './../../../services/team.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  team: Team;
  id: number;
  name: string;
  playerlist:any;
  constructor(private router: ActivatedRoute,
              private teamService: TeamService) { }

  ngOnInit() {
    this.router.params.subscribe( (params: Params) => {
      this.id = params['id'];
      this.name = params['name'];
      console.log('===========>', this.id);
    this.teamService.getTeam(this.id).subscribe( (t: Team) => {
      this.team = t.result;
      this.team = t.result.teamDetails;
      this.playerlist= t.result.player;
      console.log('-------------> ', this.team);
    });
    });
  }

}
