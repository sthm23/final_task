import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { OrderComponent } from './pages/order/order.component';
import { ErrorComponent } from './pages/error/error.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    HomeComponent,
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
    ]),
    MaterialModule
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }],
})
export class BookingModule { }
