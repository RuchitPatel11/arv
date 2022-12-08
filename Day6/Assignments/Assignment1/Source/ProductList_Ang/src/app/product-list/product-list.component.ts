import { Component, Input } from '@angular/core';
import { Product } from '../product/product.component';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',

})
export class ProductListComponent {
  @Input() product: Product[] = [];
}
