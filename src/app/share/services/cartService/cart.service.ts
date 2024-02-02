import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  private _refreshNeeded$ = new Subject<void>();
  public getTickets():Observable<any>{
    return this.http.get('http://localhost:8003/api/v1/cart/all')
  }

  public addTicket(categoryId:any ):Observable<any>{
    return this.http.post('http://localhost:8003/api/v1/cart/save', {
      qty: 1,
      ticketCategoryId: categoryId,
      customerId: 1

    })
        .pipe(tap(()=>{
          this._refreshNeeded$.next();
        }))
  }

  public updateTicket(cartId:any,categoryId:any,qty:any):Observable<any>{
    return this.http.put('http://localhost:8003/api/v1/cart/update', {
      cartId:cartId,
      qty: qty,
      ticketCategoryId: categoryId,
      customerId: 1
    })
        .pipe(tap(()=>{
          this._refreshNeeded$.next();
        }))
  }

  public getByCustomerId(customerId:any):Observable<any>{
    return this.http.get('http://localhost:8003/api/v1/cart/get-by-customerId?customerId='+customerId)
  }

  public deleteCart(cartId:any):Observable<any>{
    return this.http.delete('http://localhost:8003/api/v1/cart/delete/'+cartId)
  }

  get refreshList(){
    return this._refreshNeeded$;
  }
}
