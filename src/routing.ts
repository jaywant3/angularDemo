import { LoginComponent } from './app/login/login.component';
 
 
import { AddPlayerComponent } from './app/components/player/add-player/add-player.component';
import { PlayerDetailsComponent } from './app/components/player/player-details/player-details.component';
import { AddTeamComponent } from './app/components/team/add-team/add-team.component';
import { TeamDetailsComponent } from './app/components/team/team-details/team-details.component';
import { TeamComponent } from './app/components/team/team.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './app/_guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/teams', pathMatch: 'full'},
  { path: 'login', component : LoginComponent },
  { path: 'teams', component: TeamComponent, children: [
    { path: 'edit/:id', component: AddTeamComponent },
    { path: 'add', component: AddTeamComponent },
    { path: ':id/:name', component: TeamDetailsComponent}
  ], canActivate : [AuthGuard] },
  { path: 'players', component: PlayerDetailsComponent, canActivate : [AuthGuard]}, 
  { path: 'players/add', component: AddPlayerComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: 'login' }
];
