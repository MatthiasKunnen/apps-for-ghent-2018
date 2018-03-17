import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

import {} from '@types/googlemaps';
import TravelMode = google.maps.TravelMode;

import { MapsService } from "../../maps.service";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.min.css']
})
export class NavigationComponent implements OnInit {

    form: FormGroup;

    constructor(private maps: MapsService) {
    }

    ngOnInit() {
        this.form = new FormGroup({
            from: new FormControl(''),
            to: new FormControl(''),
        });
    }

    submit() {
        this.maps.navigate(
            this.form.controls.from.value,
            this.form.controls.to.value,
            TravelMode.WALKING,
        );
    }
}
