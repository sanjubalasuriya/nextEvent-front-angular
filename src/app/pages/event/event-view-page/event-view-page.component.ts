import {Component, OnInit} from '@angular/core';
import {EventService} from "../../../share/services/eventService/event.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
    selector: 'app-event-view-page',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        RouterLink
    ],
    templateUrl: './event-view-page.component.html',
    styleUrl: './event-view-page.component.scss'
})
export class EventViewPageComponent implements OnInit {


    id:''| undefined;
    name: '' | undefined;


    form = new FormGroup({
        id: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        location: new FormControl('', Validators.required),
        date: new FormControl('', Validators.required),
        time: new FormControl('', Validators.required),

    })
    constructor(private eventService: EventService, private activeRoute: ActivatedRoute) {
    }

    ngOnInit(): void {

        this.activeRoute.queryParams.subscribe(params => {
            this.eventService.getEventById(
                params['id']
            ).subscribe(response => {
                console.log(response)
                this.id = params['id']
                this.name = response.data.eventName

                this.form.patchValue({
                    name: response.data.eventName,
                    location: response.data.eventLocation,
                    date: response.data.eventDate,
                    time: response.data.time,


                })


            })

        });
    }

    getTicket() {
    }


}
