import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderserviceService } from '../../service/orderservice.service';
@Component({
  selector: 'app-singlemenupage',
  templateUrl: './singlemenupage.component.html',
  styleUrls: ['./singlemenupage.component.css']
})
export class SinglemenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:OrderserviceService) { }
  getMenuId:any;
  menudata: any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId){
      this.menudata = this.service.foodDetails.filter(data=>{
        return data.id == this.getMenuId
      })
      console.log("this.menudata",this.menudata);
    }
  }

}
