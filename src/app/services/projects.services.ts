import { Subject } from "rxjs"
import { HttpClient } from "@angular/common/http"
import { Injectable } from '@angular/core'

@Injectable()
export class ProjectService {

  // cardsList$ = new Subject<array>();
    cards = [
        {
          id: 0,
          author: 'Super poussin',
          tagName: 'GokuDuPoulailler',
          image: {
            src: '../../assets/img/superpoussin.jpg',
            alt: 'Poussin'
          },
          description: 'Consequat Lorem qui cillum in nulla sit consequat sit ad pariatur dolor ut proident. Eu proident sit cillum fugiat qui. Velit eu occaecat fugiat ipsum elit quis magna fugiat quis labore tempor consectetur. Voluptate nostrud aliquip id pariatur in deserunt consectetur sit ullamco fugiat. Deserunt ut et dolor veniam fugiat mollit dolore veniam est excepteur do pariatur cillum. Dolor ullamco dolore quis non duis exercitation qui.',
          likeNumber: 367,
          commentNumber: 289,
          date : new Date('September 22, 2018 15:00:00'),
          bigText: "Dolore amet culpa ullamco ullamco incididunt. Sint esse culpa velit irure dolore ipsum Lorem incididunt laboris consequat duis aute velit irure. Ea laboris ullamco laboris nisi non qui pariatur."
    
        },
        {
          id: 1,
          author: 'Poussin fumeur',
          tagName: '667PoussinOnTheHood',
          image: {
            src: '../../assets/img/poussinmalin.jpg',
            alt: 'Poussin'
          },
          description: 'Occaecat culpa cillum reprehenderit et ea tempor ullamco enim. Fugiat velit officia anim quis qui. Irure incididunt magna pariatur mollit pariatur et duis esse aliquip non ea excepteur aliqua. Est ipsum laboris magna anim deserunt.',
          likeNumber: 367,
          commentNumber: 289,
          date : new Date('September 22, 2018 15:00:00'),
          bigText: "Eiusmod aliquip nulla ipsum non culpa cupidatat ad in. In labore anim do sit velit tempor quis exercitation excepteur consectetur laboris labore. Reprehenderit proident in velit officia anim laborum tempor. Non enim pariatur ea quis quis elit id. Excepteur aliquip ipsum culpa ut officia reprehenderit irure ad aute anim occaecat deserunt."
        },
        {
          id: 2,
          author: 'Poussin chelou',
          tagName: 'Mouhahahaha',
          image: {
            src: '../../assets/img/poussinchelou.jpg',
            alt: 'Poussin'
          },
          description: 'Veniam sunt voluptate duis cupidatat elit Lorem est veniam deserunt. Officia exercitation aliqua Lorem pariatur id irure commodo. Laboris velit nulla nisi ullamco nisi labore tempor voluptate excepteur labore exercitation sunt. Ex cupidatat sint cupidatat deserunt irure adipisicing cillum cillum exercitation magna commodo sunt. Ipsum proident fugiat laboris sit. Dolore non anim nulla nulla velit proident deserunt ullamco non veniam labore qui. Est qui culpa eu aliquip.',
          likeNumber: 367,
          commentNumber: 289,
          date : new Date('September 22, 2018 15:00:00'),
          bigText: "Fugiat labore Lorem sit cillum reprehenderit et pariatur aliquip labore in consequat ut aliqua. Labore ipsum ut commodo proident consequat mollit. Ipsum do fugiat occaecat velit quis aliquip mollit sit id pariatur irure culpa dolor Lorem. Dolore occaecat mollit aliqua nisi. Eu consequat commodo reprehenderit ex nulla in sint commodo dolor sit sunt id velit ipsum."
        }
      ]


      constructor(private httpClient: HttpClient){}

      addNewCard (author: string, tagName:string, description:string){
        const nextId:number = this.cards.length

        const newCard = {
          id: nextId,
          author: '',
          tagName: '',
          image: {
            src: '',
            alt: ''
          },
          description: '',
          likeNumber: 0,
          commentNumber: 0,
          date : new Date(),
          bigText: "Eu quis sunt ea id id duis culpa. Eiusmod ex voluptate ex proident nostrud eu irure exercitation duis velit. Anim sint reprehenderit Lorem nisi irure enim occaecat duis incididunt. Ipsum velit non magna enim ipsum anim nisi est dolore ex officia consectetur. Do laborum do deserunt duis officia fugiat quis nulla Lorem occaecat cillum esse irure. Magna dolore sint incididunt proident commodo non velit velit."
        }
      }

      saveProjectsToFireBase(){
        this.httpClient.post('https://mon-blog-91a9b-default-rtdb.europe-west1.firebasedatabase.app/cards.json', this.cards)
        .subscribe(
        () => { console.log('eneregistrement terminé')},
        error => {console.log(error)}
        )
      }

}
