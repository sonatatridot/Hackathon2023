import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor(private router:Router) { }

  carDetails: boolean = false;

  ngOnInit(): void {
  }

  searchClick() {
    this.router.navigate([`${'search'}`]);
  }
  
  getCarDetails() {
    this.carDetails = true;
  }
  startClick() {
    this.router.navigate([`${'navigation'}`]);
}
}
