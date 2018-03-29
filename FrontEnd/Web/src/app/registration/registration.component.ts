import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/User';
import { UserService } from '../app.user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
  }

  onSubmit(data: NgForm) {
    const name = data.value.userName;
    const email = data.value.userEmail;
    const password = data.value.password;
    const user = new User(email, password, name);
    this.userService.insertUser(user).subscribe(
      (response) => { alert('Registered'); this.route.navigate(['/login']); },
      (error) => {
        if (error.status === 409) {
          alert('User already Exists');
        } else {
          alert('Server Not Responding');
        }
      }
    );
  }
}
