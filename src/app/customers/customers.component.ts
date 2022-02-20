import { Component, OnInit } from '@angular/core';
import {CustomersService} from "../services/customers.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customers;

  constructor(private customersService:CustomersService) { }

  ngOnInit(): void {

    this.customersService.getCustomers()
      .subscribe(data =>{
        this.customers = data;
      },err =>{
        console.log(err);
      })
  }

}
