import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';

import { ProductsRoutingModule } from './products-routing.module';
import { AllProductsComponent } from './all-products/all-products.component';




@NgModule({
  declarations: [AllProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule
  ]
})
export class ProductsModule { }
