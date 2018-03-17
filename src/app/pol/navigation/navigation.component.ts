import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

import {} from '@types/googlemaps';
import TravelMode = google.maps.TravelMode;

import { MapsService } from "../../maps.service";
import { CloseNavService } from "../../close-nav.service";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.min.css']
})
export class NavigationComponent implements OnInit {

    form: FormGroup;

    constructor(private maps: MapsService,
                private closer: CloseNavService) {
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
        this.closer.close();
    }
}
