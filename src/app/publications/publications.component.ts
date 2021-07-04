import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/projects.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  cards = this.projectService.cards
  
  constructor(
    private projectService: ProjectService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  goTo(id:number){
    this.router.navigate(['cards/' + id])
  }

}
