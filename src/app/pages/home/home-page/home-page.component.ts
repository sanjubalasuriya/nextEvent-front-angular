import { Component } from '@angular/core';
import {MainSliderComponent} from "./inner-items/main-slider/main-slider.component";
import {MainEventsComponent} from "./inner-items/main-events/main-events.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MainSliderComponent,
    MainEventsComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
