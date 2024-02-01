import {Component, Inject, Injectable, OnInit, PLATFORM_ID} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";

import {EventService} from "../../../share/services/eventService/event.service";
import {DecimalPipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {isPlatformBrowser} from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {CartService} from "../../../share/services/cartService/cart.service";
import {response} from "express";

@Injectable()
@Component({
    selector: 'app-book-ticket',
    standalone: true,
    imports: [
        RouterLink,
        NgForOf,
        FormsModule,
        DecimalPipe,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        NgIf
    ],
    templateUrl: './book-ticket.component.html',
    styleUrl: './book-ticket.component.scss'
})
export class BookTicketComponent implements OnInit {

    category: Array<any> = [];


    constructor(private eventService: EventService, private activeRoute: ActivatedRoute, private cartService: CartService) {

    }

    ngOnInit(): void {
        this.cartService.refreshList.subscribe(() => {
            this.allTickets()
        })
        this.allTickets()

    }

    allTickets() {
        this.activeRoute.queryParams.subscribe(params => {
            this.eventService.getCategoryByEventId(
                params['id']
            ).subscribe(response => {
                this.category = response.data

                this.cartService.getByCustomerId(1).subscribe(response => {
                    console.log(this.category)
                    if (response.data.length > 0) {

                        for (let i = 0; i < this.category.length; i++) {
                            for (let j = 0; j < response.data.length; j++) {
                                if (this.category[i].categoryId === response.data[j].ticketCategory) {
                                    this.category[i].qty = response.data[j].qty;
                                    this.category[i].cartId = response.data[j].cartId;

                                }
                            }
                        }
                    }
                })
            })
        });
    }


    addTicket(data: any) {
        this.cartService.addTicket(
            data.categoryId
        ).subscribe(response => {
            console.log(response);
        })
    }

    removeTicket(data: any) {
    }

    qty = 0;

    plusTicketCount(data: any) {

        this.qty = data.qty + 1
        if (this.qty < 11) {
            this.cartService.updateTicket(
                data.cartId,
                data.categoryId,
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
                data.categoryId,
                this.qty
            ).subscribe(response => {
                console.log(response)
            })
        }

        if (this.qty == 0) {

        }


    }


}
