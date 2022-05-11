import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { AnnouncementService } from '../announcement.service';
import { MapsService } from '../maps.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  private map: any;
  announcements: any;
  markerService: any;
  mapService: any;
  area: any;
  capitals: string = '/assets/data/usa-capitals.geojson';

  constructor(
    private annoucementService: AnnouncementService,
    private mapsService: MapsService
  ) {}

  ngAfterViewInit(): void {
    this.annoucementService.getAnnouncementList().subscribe((data: any) => {
      this.announcements = data;
      console.log(this.announcements);
    });

    this.initMap();
    this.mapsService.makeCapitalMarkers(this.map);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }
}
