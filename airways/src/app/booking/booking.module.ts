import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderComponent } from './pages/order/order.component';
import { ErrorComponent } from './pages/error/error.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OrderComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: HomeComponent, children: [
          {
            path: '', component: OrderComponent
          },
          {
            path: 'error', component: ErrorComponent
          },
          {
            path: '**', redirectTo: 'error', pathMatch: 'full'
          }
        ]
      }
    ])
  ]
})
export class BookingModule { }
