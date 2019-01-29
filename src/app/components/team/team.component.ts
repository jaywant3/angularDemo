import { Team } from './../../models/team';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams: Team[] = [];
  isChanged: Boolean = false;

  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private teamService: TeamService ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe( param => {
    this.isChanged = param['isChanged'] === '1' ? true : false;
    this.activatedRoute.params.subscribe( params => {
        this.teams = [];
        this.teamService.getTeams().subscribe(t => {
          console.log(t);
          t.forEach(value => {
             this.teams.push(value);
           });
         },
        (error) => {

        },
      () => {
        this.selectTeam(this.teams[0]);
      });
     });
    });
   }

   selectTeam(team: Team) {
    this.router.navigate(['/teams', team.id, team.team]);
  }

}
