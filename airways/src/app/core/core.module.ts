import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './pages/error/error.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
