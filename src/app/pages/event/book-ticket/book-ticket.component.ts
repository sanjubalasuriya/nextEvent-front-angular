import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";

import {EventService} from "../../../share/services/eventService/event.service";
import {DecimalPipe, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-book-ticket',
    standalone: true,
    imports: [
        RouterLink,
        NgForOf,
        FormsModule,
        DecimalPipe
    ],
    templateUrl: './book-ticket.component.html',
    styleUrl: './book-ticket.component.scss'
})
export class BookTicketComponent implements OnInit {

    events: Array<any> = [];



    selected = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10}

    ]
    constructor(private eventService: EventService, private activeRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        localStorage.removeItem('ticket');

        this.activeRoute.queryParams.subscribe(params => {
            this.eventService.getCategoryByEventId(
                params['id']
            ).subscribe(response => {
                this.events = response.data
                console.log(response)
            })

        });

        this.loadTotal();

    }

    select:Number=0;


    ticketList:any = [];
    onSelect(data: any){
        let ticketNull = localStorage.getItem('ticket');
        if(ticketNull == null){
            let storeDataGet:any = [];
            storeDataGet.push(data);
            localStorage.setItem('ticket',JSON.stringify(storeDataGet));
        }else {
            var id = data.categoryId;
            let index:number = -1;
            this.ticketList = JSON.parse(localStorage.getItem('ticket')!);
            for(let i=0;i < this.ticketList.length; i++){
                if(parseInt(id) === parseInt(this.ticketList[i].categoryId)){
                    this.ticketList[i].select = data.select;
                    index = i;
                    break;
                }
            }
            if(index == -1){
                this.ticketList.push(data);
                localStorage.setItem('ticket',JSON.stringify(this.ticketList));
            }else{
                localStorage.setItem('ticket',JSON.stringify(this.ticketList));

            }
        }
        this.loadTotal();
    }

    total:number = 0;
    getTickets:any =[];
    loadTotal(){
        if(localStorage.getItem('ticket')){
            this.getTickets = JSON.parse(localStorage.getItem('ticket')!);
            this.total = this.getTickets.reduce(function (acc:any, val:any){
                return acc + (val.select * val.ticketPrice);
            },0)
        }
    }

}
