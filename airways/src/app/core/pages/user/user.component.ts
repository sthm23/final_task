import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { facebook, google, telegram } from '../../auth-modal/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  form = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    gender: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
    country: new FormControl(),
    birthday: new FormControl(),
    citizenship: new FormControl(),
  })


  constructor(
    iconRegistr: MatIconRegistry,
    sanitaizer: DomSanitizer,
  ) {
    iconRegistr.addSvgIconLiteral('google', sanitaizer.bypassSecurityTrustHtml(google));
    iconRegistr.addSvgIconLiteral('facebook', sanitaizer.bypassSecurityTrustHtml(facebook));
    iconRegistr.addSvgIconLiteral('telegram', sanitaizer.bypassSecurityTrustHtml(telegram));
  }
}
