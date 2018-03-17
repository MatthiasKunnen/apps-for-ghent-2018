import { Component, OnInit, ViewChild } from '@angular/core';

import {} from '@types/googlemaps';

import TravelMode = google.maps.TravelMode;
import { MatDialog } from '@angular/material';
import { PolComponent } from './pol/pol.component';
import { MapsService } from "./maps.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    @ViewChild('gmap') gmapElement: any;

    constructor(public dialog: MatDialog,
                private maps: MapsService) {}

    openDialog(): void {
        let dialogRef = this.dialog.open(PolComponent, {});
    }

    ngOnInit() {
        const mapProp = {
            center: new google.maps.LatLng(51.0543, 3.7174),
            zoom: 13,
        };
        const map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        this.maps.setMap(map);

        this.maps.navigate('Joremaaie 3', 'Woodrow wilson plein', TravelMode.WALKING);
    }
}
