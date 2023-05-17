import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { ErrorComponent } from './core/pages/error/error.component';
import { AuthGuard } from './core/auth.guard';
import { UserComponent } from './core/pages/user/user.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full',
  },
  {
    path: '', component: HomeComponent, children: [
      {
        path: 'user', component: UserComponent
      },
      {
        path: 'main', loadChildren: ()=> import('./main/main.module').then(m=>m.MainModule)
      },
      {
        path: 'booking', loadChildren: () => import('./booking/booking.module').then(m=>m.BookingModule)
      },
      {
        path: 'shop', loadChildren: () => import('./shopping/shopping.module').then(m=>m.ShoppingModule), canActivate: [AuthGuard]
      },
      {
        path: 'error', component: ErrorComponent
      },
    ]
  },
  {
    path: '**', redirectTo: 'error', pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
