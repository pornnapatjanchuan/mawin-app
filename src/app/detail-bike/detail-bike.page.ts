import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-bike',
  templateUrl: './detail-bike.page.html',
  styleUrls: ['./detail-bike.page.scss'],
})
export class DetailBikePage implements OnInit {

  constructor() { }
  bike_detail = [
    {name:'ต้น',phone:'11111-11111',email:'ton@mail.com',image:'images/assets/01.jpg',plate:'142กทม',bike:'CBR 650F'}
  ];

  ngOnInit() {
    
    

  }

}
