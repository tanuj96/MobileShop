import { Component, OnInit } from '@angular/core';
import { MobileDescription } from '../mobile-description';

@Component({
  selector: 'ecom-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  mobileDesc: MobileDescription[] = [
    {
      brand: "Samsung",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/710weRkP-nL._SY741_.jpg",
      price: 7000,
      description: "this is samsung smart phone"
    },
    {
      brand: "Panasonic",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/41QsvcpKaZL.jpg",
      price: 15600,
      description: "this is panasonic smart phone"
    },
    {
      brand: "Oppo",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71hEzQGO5qL._SX679_.jpg",
      price: 8900,
      description: "this is oppo smart phone"
    },
    {
      brand: "Apple",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/71hEzQGO5qL._SX679_.jpg",
      price: 4000,
      description: "this is apple smart phone"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
