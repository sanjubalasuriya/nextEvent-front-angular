import { Component } from '@angular/core';
import {MainEventsComponent} from "../../home/home-page/inner-items/main-events/main-events.component";

@Component({
  selector: 'app-event-page',
  standalone: true,
  imports: [
    MainEventsComponent
  ],
  templateUrl: './event-page.component.html',
  styleUrl: './event-page.component.scss'
})
export class EventPageComponent {

}
