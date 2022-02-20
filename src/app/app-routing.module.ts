import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BillsComponent} from "./bills/bills.component";
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";

const routes: Routes = [
  {
    path:"bills",
    component: BillsComponent
  },
  {
    path:"products",
    component: ProductsComponent
  },
  {
    path:"customers",
    component: CustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
