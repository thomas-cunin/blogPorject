import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ProjectService } from '../services/projects.services';

@Component({
  selector: 'app-single-publication',
  templateUrl: './single-publication.component.html',
  styleUrls: ['./single-publication.component.scss']
})
export class SinglePublicationComponent implements OnInit {

  id:number = 0
  constructor(private route: ActivatedRoute, public projectService : ProjectService) { }

  ngOnInit(): void {
    this.id =  this.route.snapshot.params['id']

  }

}
