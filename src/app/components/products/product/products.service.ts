import { Subject } from "rxjs";   //  an Event Emitter

export class ProductsService {
   private products = ['a Book', 'a Bike', 'a Toy', 'a Ball', 'a Car'];
    productsUpdated = new Subject();

   addProduct(productName: string) {
    this.products.push(productName);
    this.productsUpdated.next(this.products);
   }

   getProducts() {
    return [...this.products];  // this creates a new copy of the 'products' array
   }

   deleteProduct(productName: string) {
        this.products = this.products.filter(p => p !== productName);
        this.productsUpdated.next(this.products);
   }
}