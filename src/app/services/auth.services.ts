import { BehaviorSubject } from 'rxjs-compat'

export class AuthService {

  isUserAuthenticated$ = new BehaviorSubject<boolean>(false)

  constructor() {}

  login() {
    this.isUserAuthenticated$.next(true)
    console.log('isUserAuthenticated$ : ')
  }

  logout() {
    this.isUserAuthenticated$.next(false)
    console.log('isUserAuthenticated$ : ')
  }


//   users = [
//     {
//       name: 'Fabrice',
//       password: 'tarteaucitron'
//     },
//     {
//       name: 'Fabrice',
//       password: 'tarteaucitron'
//     },
//     {
//       name: 'Fabrice',
//       password: 'tarteaucitron'
//     },
//     {
//       name: 'Fabrice',
//       password: 'tarteaucitron'
//     }
//   ];

//   userName:string= "Pseudo de l'utilisateur";
// const result = this.users.filter(user => user.name == this.userName);

// console.log('trouvé !');
}