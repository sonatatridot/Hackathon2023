import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParkingInfoService {

  constructor(private httpService: HttpClient) { }

  searchSlots() {
    return this.httpService.get('../../assets/parking.json');
  }
  
}
