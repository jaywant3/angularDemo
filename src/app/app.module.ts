import { PlayerService } from './services/player.service';
import { TeamService } from './services/team.service';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { appRoutes } from './../routing';
import { AlertComponent } from './_directives/alert.component';

import { TeamComponent } from './components/team/team.component';
import { TeamDetailsComponent } from './components/team/team-details/team-details.component';
import { TeamListComponent } from './components/team/team-list/team-list.component';
import { AddTeamComponent } from './components/team/add-team/add-team.component';
import { PlayerDetailsComponent } from './components/player/player-details/player-details.component';
import { PlayerListComponent } from './components/player/player-list/player-list.component';
import { AddPlayerComponent } from './components/player/add-player/add-player.component';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { DashboardDockComponent } from './components/shared/dashboard-dock/dashboard-dock.component';
import { LoginComponent } from './login/login.component';
 
import { AuthGuard } from './_guards/auth.guard';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AlertService }  from './services/alert.service'
import { from } from 'rxjs';
 
@NgModule({
  declarations: [
    AlertComponent,
    AppComponent,
    TeamComponent,
    TeamDetailsComponent,
    TeamListComponent,
    AddTeamComponent,
    PlayerDetailsComponent,
    PlayerListComponent,
    AddPlayerComponent,
    HeaderComponent,
    FooterComponent,
    DashboardDockComponent,
    LoginComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Angular2FontawesomeModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forChild(appRoutes)
  ],
  providers: [ AuthGuard, TeamService, PlayerService,
         AlertService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
