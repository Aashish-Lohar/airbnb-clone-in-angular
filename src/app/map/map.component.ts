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
  private readonly MARKER_ICON= icon({
    iconUrl:'https://cdn-icons-png.flaticon.com/512/2776/2776067.png',
    iconSize:[42,42],
    iconAnchor:[21,42]
  })
  map!:Map;
  locations = [
    [23.239361, 69.719009],
    [10.016075,77.032753],
    [	18.993652,	72.825218],
    [28.551411	,77.123123],
    [	12.987620	,77.733414],
    [	22.406437	,87.668472],
    [	28.969727	,77.723862],
    [25.262968	,91.731918],
    [	32.368473	,75.600082],
    [26.851822	,75.802292],
    [28.570414	,77.185265],
    [	30.904486	,77.096733],
    [	9.618521	,76.438469],
    [	9.593234	,76.431435],
    [12.960878	,77.643951]
  ];
  
  constructor(){}

  ngOnInit(){
    this.intializeMap();
  }

  intializeMap(){
    if(this.map) return;
    
    this.map = map(this.mapRef.nativeElement,{attributionControl:false}).setView(this.DEFAULT_LATLNG);
    this.map.setZoom(4);

    tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png').addTo(this.map);
    // this.map.on('click',(e:LeafletMouseEvent)=>{
    //   this.setMarker(e.latlng);
    // })
    this.locations.forEach((e,index)=>{
      this.setMarker(e as LatLngTuple)
    })
  }

  setMarker(latlng:LatLngExpression){

   marker(latlng,{
      draggable:false,
      icon:this.MARKER_ICON
    }).addTo(this.map);

  }




  

}
