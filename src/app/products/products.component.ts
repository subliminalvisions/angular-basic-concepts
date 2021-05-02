import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../example-data/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less'],
  // providers: [ProductService],
})
export class ProductsComponent implements OnInit {

  public products: {id: number, title: string, description: string, price: number, status: string}[] = [];
  // id: 1,
  // title: "Green smoothie",
  // type: "dairy",
  // description: "Glass of green smoothie with quail ...
  // filename: "3.jpg",
  // height: 600,
  // width: 399,
  // price: 17.68,
  // rating: 4
  // status: 'on-order'
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    console.log(this.products);
  }
}
