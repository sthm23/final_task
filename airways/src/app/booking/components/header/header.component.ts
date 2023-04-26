import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthModalComponent } from 'src/app/core/auth-modal/auth-modal.component';
import { DateFormatService } from 'src/app/core/services/date-format.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { showError: true },
  }],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  isFormat = false;

  isActive = 'MM/DD/YYYY';

  currency = 'EUR'

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private dateFormatService: DateFormatService, public dialog: MatDialog, private _formBuilder: FormBuilder) {}

  openAuthDialog() {
    const dialogRef = this.dialog.open(AuthModalComponent, {
      width: '500px',
      minHeight: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  dropDown() {
    this.isFormat = !this.isFormat
  }

  onCheckDate(format: string) {
    this.isActive = this.dateFormatService.chechFormat(format);
    this.isFormat = false;
  }

  chooseCurrency(currency: string) {
    this.currency = currency;
  }
}
