import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() productName: string = 'My First Product';
  @Output() productClicked = new EventEmitter();

  constructor(private productsService: ProductsService) {}

  ngOnInit() {}

  onClick() {
    //  this.productClicked.emit();
     console.log('item clicked !!')  // not working
     this.productsService.deleteProduct(this.productName);
    }
}
