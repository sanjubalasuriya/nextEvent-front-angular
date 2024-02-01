import {Component, OnInit} from '@angular/core';
import {EventService} from "../../../../../share/services/eventService/event.service";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-main-events',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    RouterLink
  ],
  templateUrl: './main-events.component.html',
  styleUrl: './main-events.component.scss'
})
export class MainEventsComponent implements OnInit{


  events:Array<any> = [];

  constructor(private eventService:EventService) {
  }
  ngOnInit(): void {
    this.eventService.refreshList.subscribe(() =>{
      this.getAllEvents();
    });
    this.getAllEvents()
  }

  private getAllEvents(){
    this.eventService.getEvents().subscribe(response=>{
      this.events = response.data


    })
  }

}
