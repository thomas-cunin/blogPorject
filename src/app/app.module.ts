import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from './services/projects.services';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { PublicationsComponent } from './publications/publications.component';
import { HeaderComponent } from './header/header.component';
import { NewCardComponent } from './new-card/new-card.component';
import { HomeComponent } from './home/home.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { SinglePublicationComponent } from './single-publication/single-publication.component';
import { AuthService } from './services/auth.services';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './services/authGuard';
import { UserService } from './services/user-service';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';

const appRoutes: Routes= [
  {path: 'cards',canActivate: [AuthGuard], component: PublicationsComponent},
  {path: '', component: HomeComponent },
  {path: 'newcard',canActivate: [AuthGuard], component: NewCardComponent},
  { path: 'not-found', component: FourOhFourComponent },
  { path: 'cards/:id',canActivate: [AuthGuard], component: SinglePublicationComponent },
  {path: 'register', component:RegisterComponent},
  {path: 'auth', component: AuthComponent},
  { path: '**', redirectTo: 'not-found'}
]
@NgModule({
  declarations: [
    AppComponent,
    PublicationsComponent,
    HeaderComponent,
    NewCardComponent,
    HomeComponent,
    FourOhFourComponent,
    SinglePublicationComponent,
    AuthComponent,
    RegisterComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProjectService,
    AuthService,
    AuthGuard,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
