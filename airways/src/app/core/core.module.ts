import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './pages/error/error.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { MaterialModule } from '../material/material.module';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    AuthModalComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule

  ]
})
export class CoreModule { }
