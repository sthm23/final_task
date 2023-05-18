import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { facebook, google, telegram } from '../../auth-modal/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { User } from 'src/app/redux/state.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    gender: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
    country: new FormControl(),
    birthday: new FormControl(),
    citizenship: new FormControl(),
    loginForm: new FormGroup({
      login: new FormControl(),
      password: new FormControl()
    })
  })



  userName = ''
  changeValue = false
  constructor(
    iconRegistr: MatIconRegistry,
    sanitaizer: DomSanitizer,
  ) {
    iconRegistr.addSvgIconLiteral('google', sanitaizer.bypassSecurityTrustHtml(google));
    iconRegistr.addSvgIconLiteral('facebook', sanitaizer.bypassSecurityTrustHtml(facebook));
    iconRegistr.addSvgIconLiteral('telegram', sanitaizer.bypassSecurityTrustHtml(telegram));
  }

  ngOnInit(): void {
      const user = JSON.parse(localStorage.getItem('user_name')!) as User;
      this.setFormValue(user)
      this.userName = `${user.firstName} ${user.lastName}`;

      this.form.valueChanges.subscribe(el=>{
        console.log(el);
        this.changeValue = true
      })
  }

  setFormValue(user:User) {
    this.form.controls.birthday.setValue(user.birthday)
    this.form.controls.citizenship.setValue(user.citizenship)
    this.form.controls.country.setValue(user.country)
    this.form.controls.email.setValue(user.email)
    this.form.controls.firstName.setValue(user.firstName)
    this.form.controls.gender.setValue(user.gender)
    this.form.controls.lastName.setValue(user.lastName)
    this.form.controls.phoneNumber.setValue(user.phoneNumber)

    this.form.controls.loginForm.controls.login.setValue(user.login)
    this.form.controls.loginForm.controls.password.setValue(user.password)
  }

  onSubmit() {
    console.log(this.form.value);

  }
}
