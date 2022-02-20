import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  public host: string="http://localhost:8888/BILLING-SERVICE"

  constructor(private http:HttpClient) { }

  public getBills(){
    return this.http.get(this.host+"/bills");
  }

  getProducts(b) {
    return this.http.get(b._links.productItems.href);
  }
}
