import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import {LatLngTuple, Map, map, tileLayer, Marker, LatLng, marker, LatLngExpression,icon, LeafletMouseEvent, latLng, ZoomAnimEvent, MapOptions} from "leaflet";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  @ViewChild('map',{static:true})
  mapRef!:ElementRef;

  private readonly DEFAULT_LATLNG:LatLngTuple = [20.5937,78.9629];
  map!:Map;
  constructor(){}

  ngOnInit(){
    this.intializeMap();
  }

  intializeMap(){
    if(this.map) return;
    
    this.map = map(this.mapRef.nativeElement,{attributionControl:false}).setView(this.DEFAULT_LATLNG);
    this.map.setZoom(4);

    tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map)
  }

}
