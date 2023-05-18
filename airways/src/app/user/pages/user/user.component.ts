import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { User } from 'src/app/redux/state.model';
import { UserService } from '../../services/user.service';
import { facebook, google, telegram } from 'src/app/core/auth-modal/icon';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  form = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    citizenship: new FormControl('', [Validators.required]),
    loginForm: new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  })
  userName = ''
  changeValue = false
  constructor(
    iconRegistr: MatIconRegistry,
    sanitaizer: DomSanitizer,
    private userService: UserService
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
    this.form.controls.id.setValue(user.id)

    this.form.controls.loginForm.controls.login.setValue(user.login)
    this.form.controls.loginForm.controls.password.setValue(user.password)
  }

  onSubmit() {
    const obj = {...this.form.value};
    this.userService.updateUser(obj.id, {
      firstName: obj.firstName,
      lastName: obj.lastName,
      email: obj.email,
      phoneNumber: obj.phoneNumber,
      gender: obj.gender,
      country: obj.country,
      citizenship: obj?.citizenship,
      birthday: obj.birthday,
      login: obj.loginForm?.login,
    }, localStorage.getItem('ref_token')!).subscribe(result=>{
      localStorage.setItem('user_name', JSON.stringify(result));
      this.changeValue = false
    })
  }
}
