import { User } from "./user.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    
    private users: User[] = [];
    userSubject: Subject<User[]> = new Subject<User[]>()
    
    constructor(
      private httpClient : HttpClient
    ) {}
  
    emitUsers() {
      this.userSubject.next(this.users.slice())
    }

    getNewId(userBase): any {
      const newId = userBase.length
      return newId
    }
  
    addNewUser(formValue: any): void {
        console.log(formValue)
        console.log(this.users)
      const newUser = new User(
        this.getNewId(this.users),
        formValue['email'],
        formValue['password'],
        formValue['firstName'],
        formValue['lastName']
      )
      this.users.push(newUser)
      console.log(this.users)
      this.emitUsers()
      this.saveUserToFireBase(newUser)
    }

    saveUserToFireBase(newUserToPush):void{
      this.httpClient.post('https://mon-blog-91a9b-default-rtdb.europe-west1.firebasedatabase.app/usersDB.json', newUserToPush)
      .subscribe(
      () => { console.log('eneregistrement terminé')},
      error => {console.log(error)}
      )
    }
}