import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductService } from '../../example-data/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.less']
})
export class EditProductComponent implements OnInit {

  public product: {id: number, title: string, description: string, price: number, status: string};

  prodName = '';
  prodStatus = '';
  paramsSubscirption: Subscription;
  allowEdit = false;

  constructor(private prodService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams
      .subscribe(
        (queryParams: Params) => {
          this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
        }

      );
    this.paramsSubscirption = this.route.params
      .subscribe(
        (params: Params) => {
          if (params['id']) {
            const id = +params['id'];
            this.product = this.prodService.getProduct(id);
          } else {
            this.product = this.prodService.getProduct(1);
          }
          this.prodName = this.product.title;
          this.prodStatus = this.product.status;
        }
      );
  }

  onUpdateProduct(): any {
    this.prodService.updateProduct(
      this.product.id, {title: this.prodName, status: this.prodStatus});
  }

}
