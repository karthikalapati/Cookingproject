import { Component, OnInit } from '@angular/core';
import { OrderserviceService } from '../../service/orderservice.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private oservice: OrderserviceService) { }
  orderitems:any;
  ngOnInit(): void {
    this.orderitems = this.oservice.foodDetails;
  }

}
