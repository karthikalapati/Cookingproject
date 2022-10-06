import { Component, OnInit } from '@angular/core';
import { OrderserviceService } from '../../service/orderservice.service'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private orderservice:OrderserviceService) { }
  fooData:any;
  ngOnInit(): void {
    this.fooData = this.orderservice.foodDetails;
  }

}
