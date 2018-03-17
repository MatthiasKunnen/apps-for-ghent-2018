import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import {} from '@types/googlemaps';

import TravelMode = google.maps.TravelMode;
import DirectionsStatus = google.maps.DirectionsStatus;
import DirectionsRenderer = google.maps.DirectionsRenderer;
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PolComponent } from './pol/pol.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    directionsDisplay: DirectionsRenderer;
    @ViewChild('gmap') gmapElement: any;
    map: google.maps.Map;

    constructor(public dialog: MatDialog) {}    

    openDialog(): void {
        let dialogRef = this.dialog.open(PolComponent, {});
    }

    ngOnInit() {
        const mapProp = {
            center: new google.maps.LatLng(51.0543, 3.7174),
            zoom: 13,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

        this.directionsDisplay = new google.maps.DirectionsRenderer({
            draggable: true,
            map: this.map,
        });

        this.navigate('Joremaaie 3', 'Woodrow wilson plein', TravelMode.WALKING);
    }

    /**
     * Start navigation from a to b.
     */
    navigate(a: string, b: string, mode: TravelMode) {
        const directionsService = new google.maps.DirectionsService();
        directionsService.route({
            origin: a,
            destination: b,
            travelMode: mode,
            provideRouteAlternatives: true,
        }, (response, status: DirectionsStatus) => {
            if (status === DirectionsStatus.OK) {
                const randomRoute = Math.floor(Math.random() * response.routes.length);
                this.directionsDisplay.setDirections(response);
                this.directionsDisplay.setRouteIndex(randomRoute);
            }
        });
    }
}
