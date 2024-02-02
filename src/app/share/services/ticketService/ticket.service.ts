import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) { }


  public saveCategory(ticketList:any ):Observable<any>{
    return this.http.post<any>('http://localhost:8003/api/v1/ticket/save', {
      requestTicketDTOList: ticketList,


    })
  }
}
