import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home/home-page/home-page.component";
import {EventViewPageComponent} from "./pages/event/event-view-page/event-view-page.component";
import {NotFoundPageComponent} from "./core/not-found-page/not-found-page.component";
import {EventPageComponent} from "./pages/event/event-page/event-page.component";
import {BookTicketComponent} from "./pages/event/book-ticket/book-ticket.component";

export const routes: Routes = [
    {path:'', redirectTo:'/home',pathMatch:'full'},
    {path:'home', component:HomePageComponent},
    {path:'events', component:EventPageComponent},
    {path:'event-details/:id',component:EventViewPageComponent},
    {path:'book-tickets/:id',component:BookTicketComponent},
    {path:'**',component:NotFoundPageComponent}
];
