import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopHomeComponent } from './pages/shop-home/shop-home.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { OrderPageComponent } from './pages/order-page/order-page.component';



@NgModule({
  declarations: [
    ShopHomeComponent,
    HeaderComponent,
    FooterComponent,
    OrderPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: ShopHomeComponent, children: [{
        path: '', component: OrderPageComponent
      }]
    }]),
    MaterialModule
  ]
})
export class ShoppingModule { }
