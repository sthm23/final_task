import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpRequestService } from './services/http-request.service';
import { INTERCEPTOR_PROVIDER } from './services/http-request.interseptor';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '', component: HomeComponent
      }
    ]),
    ReactiveFormsModule,
    MaterialModule
  ],

  providers: [
    HttpRequestService,
    INTERCEPTOR_PROVIDER,
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'accent' },
    }
  ],
})
export class MainModule { }
