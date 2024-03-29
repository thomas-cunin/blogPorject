import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.services';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import { Observable } from "rxjs-compat";


@Injectable()
export class AuthGuard implements CanActivate {

    constructor ( private authService :AuthService, private router:Router){
       
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.authService.isUserAuthenticated$
        }
}