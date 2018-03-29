import { Component, OnInit } from '@angular/core';
import { Authenticate } from '../app.authenticate.user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router, private auth: Authenticate) { }

  ngOnInit() {
    this.auth.isAuthenticated();
  }

  logout() {
    this.auth.logout();
    this.route.navigate(['/']);
  }

}
