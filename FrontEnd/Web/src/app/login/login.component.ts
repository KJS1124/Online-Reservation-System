import { Component, OnInit } from '@angular/core';
import { FormStyle } from '@angular/common';
import { NgForm } from '@angular/forms';
import { CheckingService } from '../app.checking.service';
import { Authenticate } from '../app.authenticate.user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _service: CheckingService, private auth: Authenticate, private route: Router) { }

  ngOnInit() {
  }

  onSubmit(data: NgForm) {
    const user = data.value.userEmail;
    const pass = data.value.password;
    // this._service.obtainAccessToken({ user, pass });
    this.auth.login({ user, pass });
    // this.route.navigate(['/']);
  }

}
