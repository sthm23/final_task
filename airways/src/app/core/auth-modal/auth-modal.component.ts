import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HeaderComponent } from '../components/header/header.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface DialogData {
  data: any
}

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthModalComponent {

  hide = false

  toggleBlock = true

  logInForm:FormGroup;

  registerForm:FormGroup;

  documents = ['passport', 'birthday doc', 'anything also']

  constructor(
    public dialogRef: MatDialogRef<HeaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.logInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })

    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      birthday: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      gender: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      countryCode: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      document: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    })
  }

  login() {

    console.log(this.logInForm.value);
    this.logInForm.valid ? this.dialogRef.close('success login') : ''
  }

  register(): void {
    console.log(this.registerForm.value);
    this.registerForm.valid ? this.dialogRef.close('success register') : ''

  }

}
