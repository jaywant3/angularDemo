import { Team } from './../../../models/team';
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  @Input() teams: Team[];

  constructor( private teamService: TeamService,
               private router: Router,
               private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('TeamListComponent ', this.teams);
    if (this.teams !== undefined && this.teams[0] !== undefined) {
      this.selectTeam(this.teams[0]);
    }
  }

  onEditTeam(team: Team) {
    console.log(team);
    this.router.navigate(['/teams/edit', team.id]);
  }

  selectTeam(team: Team) {
    console.log('Selected Team Id is : ', team.id);
    this.router.navigate(['/teams', team.id, team.team]);
  }

  onDeleteTeam(team: Team) {
    this.teamService.deleteTeam(team.id).subscribe();
    this.router.navigate(['/teams'], { queryParams: { isChanged: '1'}});
    console.log('delete team');
  }
}
