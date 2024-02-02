import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {DecimalPipe, isPlatformBrowser, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../../share/services/cartService/cart.service";
import {EventService} from "../../../share/services/eventService/event.service";
import {TicketService} from "../../../share/services/ticketService/ticket.service";
import {response} from "express";

@Component({
  selector: 'app-book-process',
  standalone: true,
    imports: [
        DecimalPipe,
        FormsModule,
        NgForOf,
        MatTableModule,
        MatIconModule,
        NgIf
    ],
  templateUrl: './book-process.component.html',
  styleUrl: './book-process.component.scss'
})
export class BookProcessComponent implements OnInit{

    category: any = [];
    total:any = 0;

    ticketList:Array<any> =[];

    constructor( private activeRoute: ActivatedRoute, private cartService: CartService, private eventService:EventService, private ticketService:TicketService) {
    }
    ngOnInit(): void {
        this.cartService.refreshList.subscribe(() => {
            this.allTickets()
        })
        this.allTickets()

    }

    allTickets() {
        this.cartService.getByCustomerId(1).subscribe(response => {

            this.category = response.data
            this.ticketList = response.data



            for (let i = 0; i < this.category.length; i++) {
                    this.eventService.getCategoryById(response.data[i].ticketCategory).subscribe(res=>{
                        this.category[i].categoryName = res.data.category;
                        this.category[i].eventName = res.data.eventName;
                        this.category[i].price = res.data.ticketPrice;

                        this.total = this.total + (response.data[i].qty * res.data.ticketPrice)
                    })

            }

        })

    }

    saveTickets(){

        for(let i = 0; i < this.ticketList.length; i++){
            delete this.ticketList[i].categoryName;
            delete this.ticketList[i].eventName;
            delete this.ticketList[i].cartId
        }

        this.ticketService.saveCategory(
            this.ticketList

        ).subscribe(response=>{
            console.log(response)

        },error=>{


        })

        for(let i = 0; i < this.category.length; i++){
            this.cartService.deleteCart(this.category[i].cartId).subscribe(response=>{
                console.log(response)
            })


        }


    }




    qty = 0;

    plusTicketCount(data: any) {

        this.qty = data.qty + 1
        if (this.qty < 11) {
            this.cartService.updateTicket(
                data.cartId,
                data.ticketCategory,
                this.qty
            ).subscribe(response => {
                console.log(response)
            })
        }

    }

    minusTicketCount(data: any) {
        this.qty = data.qty - 1
        if (this.qty != 0) {
            this.cartService.updateTicket(
                data.cartId,
                data.ticketCategory,
                this.qty
            ).subscribe(response => {
                console.log(response)
            })
        }

        if (this.qty == 0) {

        }


    }

}
