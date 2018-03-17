import { Injectable } from '@angular/core';

import {} from '@types/googlemaps';
import TravelMode = google.maps.TravelMode;
import DirectionsStatus = google.maps.DirectionsStatus;
import DirectionsRenderer = google.maps.DirectionsRenderer;

@Injectable()
export class MapsService {
    directionsDisplay: DirectionsRenderer;
    map: google.maps.Map;

    constructor() {
    }

    setMap(map: google.maps.Map) {
        this.map = map;
        this.directionsDisplay = new google.maps.DirectionsRenderer({
            draggable: true,
            map: map,
        });
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
