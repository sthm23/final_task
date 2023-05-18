import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { UserComponent } from './pages/user/user.component';
import { RouterModule } from '@angular/router';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { UserTableComponent } from './pages/user-table/user-table.component';



@NgModule({
  declarations: [
    UserComponent,
    UserHomeComponent,
    UserTableComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{
      path: '', component: UserHomeComponent
    }])
  ]
})
export class UserModule { }
