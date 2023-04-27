import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full',
  },
  {
    path: 'main', loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'booking', loadChildren: () => import('./booking/booking.module').then(m=>m.BookingModule)
  },
  {
    path: 'shop', loadChildren: () => import('./shopping/shopping.module').then(m=>m.ShoppingModule)
  },
  {
    path: '**', redirectTo: 'main', pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
