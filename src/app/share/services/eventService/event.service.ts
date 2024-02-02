import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }

  private _refreshNeeded$ = new Subject<void>();

  public getEvents():Observable<any>{
    return this.http.get('http://localhost:8003/api/v1/event/all')
  }

  public getEventById(id:any):Observable<any>{
    return this.http.get('http://localhost:8003/api/v1/event/get-by-id?eventId='+id)
  }

  public getCategoryByEventId(id:any):Observable<any>{
    return this.http.get('http://localhost:8003/api/v1/ticket-category/get-by-eventId?eventId='+id)
  }

  public getCategoryById(id:any):Observable<any>{
    return this.http.get('http://localhost:8003/api/v1/ticket-category/get-by-id?categoryId='+id)
  }

  get refreshList(){
    return this._refreshNeeded$;
  }
}
