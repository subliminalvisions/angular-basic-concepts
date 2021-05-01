import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../../example-data/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  // server: {id: number, name: string, status: string};
  public product: {id: number, title: string, description: string, price: number, status: string};

  constructor(private prodService: ProductService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.product = this.prodService.getProduct(id);
    this.route.params
        .subscribe(
          (params: Params) => {
              this.product = this.prodService.getProduct(+params['id']);
          }
        );
  }
  onEdit(): any {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }
}
