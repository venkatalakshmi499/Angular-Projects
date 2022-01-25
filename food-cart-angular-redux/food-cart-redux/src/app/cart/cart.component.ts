import { Component, OnInit } from '@angular/core';
import{Store,select} from '@ngrx/store';
import {Observable } from "rxjs";
import * as Cart from "./../store/actions";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart!:Observable<Array<any>>


  constructor(private store:Store<any>) {
    this.cart = this.store.select('cart')
  }


  ngOnInit(): void {
  }

  removeFromCart(product:any){
    this.store.dispatch(new Cart.RemoveProduct(product));
  }

}
