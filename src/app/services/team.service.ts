import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get<Team[]>('http://localhost/startrail.in/team/api/findMultiple');
  }

  getTeam(id: number) {
    return this.http.get<Team>(`http://localhost/startrail.in/team/api/findSingle/${id}`);
  }

  saveTeam(team: Team) {
    return this.http.post('http://localhost/startrail.in/team/api/create', team);
  }

  deleteTeam(id: number) {
    return this.http.delete(`http://localhost/startrail.in/team/api/delete/${id}`);
  }
}
