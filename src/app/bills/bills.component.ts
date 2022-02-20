import { Component, OnInit } from '@angular/core';
import {BillsService} from "../services/bills.service";

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {

  public bills;
  public products;

  constructor(private billsService:BillsService) { }

  ngOnInit(): void {

    this.billsService.getBills()
      .subscribe(data =>{
        this.bills = data;
      },err =>{
        console.log(err);
      })
  }

  onGetProducts(b) {
    this.billsService.getProducts(b)
      .subscribe(data =>{
        this.products = data;
      },err =>{
        console.log(err);
      })
  }
}
