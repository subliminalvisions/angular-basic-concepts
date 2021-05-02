import { Injectable } from '@angular/core';
import { DataTest1 } from './products-v1';

@Injectable({
  providedIn: 'root',
  // providers: [DataTest1],
})
export class ProductService {
  // import product model here
  poducts: any;

  constructor(private data: DataTest1) {
    this.poducts = this.getProducts();
  }
  getProducts(): any {
    return this.data.products;
  }
  getProduct(id: number): any{
    const prod = this.poducts.find(
      (s) => {
        return s.id === id;
      }
    );
    return prod;
  }

  updateProduct(id: number, productInfo: {title: string, status: string}): any {
    const server = this.poducts.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.title = productInfo.title;
      server.status = productInfo.status;
    }
  }
}

