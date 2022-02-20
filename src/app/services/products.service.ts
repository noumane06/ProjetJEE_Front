import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public host: string="http://localhost:8888/PRODUCT-SERVICE"

  constructor(private http:HttpClient) { }

  public getProducts(){
    return this.http.get(this.host+"/products");
  }
}
