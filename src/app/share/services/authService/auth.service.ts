import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public signIn(email:any, password:any ):Observable<any>{
    return this.http.post<any>('http://localhost:8003/api/v1/register/signin', {
      email: email,
      password: password,

    })
  }
}
