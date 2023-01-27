import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from './product/products.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  isDisabled = true;
  productName = "test"
  // products = ['a book', 'a bike', 'a toy', 'a ball', 'a car'];
  products = [''];
  subhead = ['average review copy text', 'super dooper wonderful', 'Staying at home has its advantages', 'I wish I could write better text', 'have you heard of this great product?', '']

  valid: boolean = false;
  value: string = "";
  private productsSubscription: Subscription;

  constructor(private productsService: ProductsService) {
    
    this.products = this.productsService.getProducts();

    setTimeout(() => {
      this.isDisabled = false;
    }, 1000);
  }

  onAddProduct(form: any) {
    // this.products.push(this.productName)
    console.log(form)  // prints the whole object
    // if(form.valid){
    //   this.products.push(form.value.productName);
    // }
    if (form.valid) {
      this.productsService.addProduct(form.value.productName)
    }
  }
  onRemoveProduct(productName: string) {
    this.products = this.products.filter(p => p !== this.productName);
    console.log('item clicked !!')  // not working
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.productsSubscription = this.productsService.productsUpdated.subscribe(() => {
      this.products = this.productsService.getProducts();
    });
  }

  ngOnDestroy(): void {
      this.productsSubscription.unsubscribe();
  }
}
