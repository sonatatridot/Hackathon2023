import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParkingInfoService } from 'src/app/services/parking-info.service';

@Component({
  selector: 'app-search-parking',
  templateUrl: './search-parking.component.html',
  styleUrls: ['./search-parking.component.scss']
})
export class SearchParkingComponent implements OnInit {

  constructor(private router:Router, private parkingInfo: ParkingInfoService) { }
  carDetails:boolean = false;
  parkingSlots:boolean = false;
  searchPanel:boolean = true;
  slot:boolean = false;
  parkingDetails:any = [];
  selectedCity:any;
  cities:any = ["Select", "Bangalore", "Hyderabad", "Chennai", "Mumbai", "Delhi"];
  areas:any = [];
  street:any = [];

  ngOnInit(): void {
    this.parkingInfo.searchSlots()
    .subscribe(res => {
      console.log(res);
      this.parkingDetails = res;
      console.log(this.parkingDetails);
    });
  }
  
  onCityChange(city:any) {
    this.street = [];
    this.areas = [];
    console.log(city.target.value);
    console.log("Hello");
    console.log(this.parkingDetails);
    this.parkingDetails.forEach((data:any)=> {
      if(city.target.value == data.city) {
        this.areas = data.areas;
      }
    });
  }
  onAreaChange(area:any) {
    this.parkingDetails.forEach((data:any)=> {
      console.log(data);
      data.areas.forEach((dat:any) => {
        if(area.target.value == dat.areaName) {
          this.street = dat.streets;
        }
      })
      
      console.log(this.street);
    });
  }

  goClick() {
    this.searchPanel = false;
    this.parkingSlots = true;
  }
  carcompleteDetails() {
    this.carDetails = true;
  }
  slotClick() {
    this.slot = !this.slot;
  }
  startClick() {
      this.router.navigate([`${'navigation'}`]);
  }
  confirmClick() {
    this.router.navigate([`${'confirmation'}`]);
  }

}
