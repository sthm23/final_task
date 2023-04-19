import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: '', loadChildren: () => import('../main/main.module').then(m=>m.MainModule)
      },
      {
        path: 'error', component: ErrorComponent
      },
      {
        path: '**', redirectTo: 'error', pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
