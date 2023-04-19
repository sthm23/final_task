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
    path: '**', redirectTo: 'main/error', pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
