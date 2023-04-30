import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { OrderComponent } from './pages/order/order.component';
import { ErrorComponent } from './pages/error/error.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MaterialModule } from '../material/material.module';
import { ConfigPassengersComponent } from './pages/config-passengers/config-passengers.component';
import { OrderSummaryComponent } from './pages/order-summary/order-summary.component';
import { PassengersCardComponent } from './components/passengers-card/passengers-card.component';
import { SummaryCardComponent } from './components/summary-card/summary-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    OrderComponent,
    ErrorComponent,
    ConfigPassengersComponent,
    OrderSummaryComponent,
    PassengersCardComponent,
    SummaryCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: HomeComponent, children: [
          {
            path: '', component: OrderComponent,
          },
          {
            path: 'order', component: ConfigPassengersComponent,
          },
          {
            path: 'summary', component: OrderSummaryComponent,
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
