import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user = '';
  password = '';
  logged = false;
  constructor() { }

  isLogged() {
    this.logged = true;
  }
}
