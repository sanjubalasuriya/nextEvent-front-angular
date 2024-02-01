import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../../share/services/authService/auth.service";

import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {CookieManagerService} from "../../../share/services/cookieService/cookie-manager.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [

    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  loginError:string = '';

  constructor(private authService:AuthService, private cookieManager:CookieManagerService, private router:Router) {
  }

  form = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  })

  signup(){
    this.authService.signIn(
        this.form.get('email')?.value,
        this.form.get('password')?.value

    ).subscribe(response=>{
      this.cookieManager.setCookie(response.token)
      this.router.navigateByUrl("/events")

      this.form.reset();
    },error=>{
      this.loginError = "Invalid Email or Password"

    })

  }

}
