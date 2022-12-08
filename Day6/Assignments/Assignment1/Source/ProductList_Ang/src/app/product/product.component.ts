import { Component } from '@angular/core';

export interface Product {
  name: string;
  img: string;
  price: number;
  quantity: number;
  gross?: number;
  discount?: number;
  payable?: number;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',

})
export class ProductComponent {
  products: Product[] = [
    {
      img: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      name: 'Cotton Jacket',
      price: 2200,
      quantity: 2,
    },
    {
      img: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      name: 'Shirt',
      price: 1400,
      quantity: 3,
    },
    {
      img: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      name: 'T-shirt',
      price: 1350,
      quantity: 3,
    },
  ];
  constructor() {
    this.products = this.products.map((item) => {
      item.gross = item.price * item.quantity;
      item.discount = item.gross * 0.05;
      item.payable = item.gross - item.discount;

      return item;
    });
  }
}
