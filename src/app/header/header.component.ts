import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.services';
import { Subscription } from 'rxjs-compat';
import { timer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private authService: AuthService, private router: Router) { }

  isAuth: boolean = false
  isAuthSub: Subscription = new Subscription();
  showWarning :boolean = false;

  ngOnInit(): void {
      this.isAuthSub = this.authService.isUserAuthenticated$.subscribe(
        data => { this.isAuth = data; console.log('data = ' + this.isAuthSub) },
        error => { console.log('Une erreur est survenue ' + error) },
        () => { console.log('Observation terminée') }
      );
      console.log(' ')
      this.warningTimer()
    }
  
    ngOnDestroy(): void {
      this.isAuthSub.unsubscribe()
      console.log('destroy')
    }

    
 warningTimer(){
   //emit 0 after 1 second then complete, since no second argument is supplied
this.showWarning = true;
const source = timer(3500);
//output: 0
const subscribe = source.subscribe(val => this.showWarning = false);
 }

  logIn() {
    this.authService.login()
    this.router.navigate([''])
    console.log('action : ' + this.isAuth)
  }

  logOut() {
    this.authService.logout()
    this.router.navigate([''])
    console.log('logout')
    console.log('action : ' + this.isAuth)
  }

}
