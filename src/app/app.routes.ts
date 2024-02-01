import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home/home-page/home-page.component";
import {EventViewPageComponent} from "./pages/event/event-view-page/event-view-page.component";
import {NotFoundPageComponent} from "./core/not-found-page/not-found-page.component";
import {EventPageComponent} from "./pages/event/event-page/event-page.component";
import {BookTicketComponent} from "./pages/event/book-ticket/book-ticket.component";
import {BookProcessComponent} from "./pages/event/book-process/book-process.component";
import {SignupPageComponent} from "./pages/security/signup-page/signup-page.component";
import {FogotPasswordPageComponent} from "./pages/security/fogot-password-page/fogot-password-page.component";
import {OtpVerificationPageComponent} from "./pages/security/otp-verification-page/otp-verification-page.component";
import {ResetPasswordPageComponent} from "./pages/security/reset-password-page/reset-password-page.component";
import {LoginPageComponent} from "./pages/security/login-page/login-page.component";

export const routes: Routes = [
    {path:'', redirectTo:'/home',pathMatch:'full'},
    {path:'home', component:HomePageComponent},
    {path:'events', component:EventPageComponent},
    {path:'register', component:SignupPageComponent},
    {path:'login', component:LoginPageComponent},
    {path:'reset-password', component:ResetPasswordPageComponent},
    {path:'otp-verification', component:OtpVerificationPageComponent},
    {path:'forgot-password', component:FogotPasswordPageComponent},

    {path:'event-details/:id',component:EventViewPageComponent},
    {path:'book-tickets/:id',component:BookTicketComponent},
    {path:'cart',component:BookProcessComponent},
    {path:'**',component:NotFoundPageComponent}
];
