import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HeaderComponent } from '../components/header/header.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { facebook, google } from './icon';
import { AuthLoginRegisterService } from '../services/auth.service';
import { CreateUser, GenderType, LoginResult, LoginWithSocial, RegisterCountryType } from 'src/app/material/interfaces/interfaces';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthModalComponent implements OnInit {

  hide = false

  toggleBlock = true

  logInForm:FormGroup;

  registerForm!:FormGroup<any>;

  documents:RegisterCountryType[] = []

  constructor(
    private authService: AuthLoginRegisterService,
    public dialogRef: MatDialogRef<HeaderComponent>,
    iconRegistr: MatIconRegistry,
    sanitaizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: LoginResult | LoginWithSocial | undefined,
  ) {
    iconRegistr.addSvgIconLiteral('google', sanitaizer.bypassSecurityTrustHtml(google));
    iconRegistr.addSvgIconLiteral('facebook', sanitaizer.bypassSecurityTrustHtml(facebook));
    this.logInForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })

  }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      birthday: new FormControl(null, [Validators.required]),
      gender: new FormControl<GenderType>('male', [Validators.required]),
      countryCode: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      document: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    }) as any
    this.authService.getCountry().subscribe(country=>{
      this.documents = country;
    })
  }

  pickDate(picker:any) {
    picker.open()
  }

  login() {
    if(this.logInForm.valid) {
      this.authService.login(this.logInForm.value)
        .subscribe(result=> {
          this.dialogRef.close({type:'login', result})
        })
    }
  }

  register(): void {
    if(this.registerForm.valid) {
      const {
        email, password, firstName,
        lastName, birthday, gender,
        countryCode, phoneNumber, document
      } = this.registerForm.value;

      const user:CreateUser = {
        firstName, birthday, email,
        lastName, password, gender,
        phoneNumber:document.code + phoneNumber,
        citizenship: document.name,
        login:email,
        country: countryCode.name
      }
      this.authService.register(user).subscribe(result=>{
        if(result) {
          this.authService.login({username: result.login, password: password})
            .subscribe(result=>{
              this.dialogRef.close({type:'login', result})
            })
        }
      })
    }
  }

  loginWithGoogle() {
    this.authService.login({username: 'test', password: 'test'})
    .subscribe(result=>{
      this.dialogRef.close({type:'login', result})
    })
  }

  loginWithFacebook() {
    this.authService.login({username: 'test', password: 'test'})
    .subscribe(result=>{
      this.dialogRef.close({type:'login', result})
    })
  }

}
