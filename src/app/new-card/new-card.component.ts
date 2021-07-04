import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/projects.services';

import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CardModel } from '../services/card.model';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {


  newCardRendered:boolean = false
  cards = this.projectService.cards
  newCard = {
    id: 3,
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
  constructor(private projectService: ProjectService, private cardModel: CardModel) { }

  ngOnInit(): void {
    
  }

  
  submitClick(value:number){
    if (value == 1){
      this.newCardRendered = true
    }
    else {
      this.newCardRendered = false
    }
    
  }

 testClick(){
  this.projectService.cards.push(this.newCard)
 }






//  onSubmit(form:NgForm): void {
//   const author = form.value['name']
//   const description = form.value['description']
//   const tagName = form.value['tagName']
//   this.projectService.addNewProject(author, description)

 }

 
//  removeData() {
//     localStorage.removeItem(key)
//  }

