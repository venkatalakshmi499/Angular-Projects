import { Component, OnInit } from '@angular/core';
import{PRODUCTS} from './../store/market';
import{Product} from './../store/product.model';
import{ActivatedRoute} from '@angular/router';
import{Store} from '@ngrx/store';
import * as Cart from './../store/actions';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product!:Product;
  constructor(private route:ActivatedRoute,private store:Store<any>) { }

  ngOnInit(): void {
    this.route.params.subscribe((p)=>{
      let id=p['id'];
      let result=Array.prototype.filter.call(PRODUCTS,(v)=>v.id==id);
      if(result.length>0){
        this.product=result[0];
      }
    })
  }
addToCart(product:any){
this.store.dispatch(new Cart.AddProduct(product));
}
}
