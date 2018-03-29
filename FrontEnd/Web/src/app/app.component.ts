import { Component } from '@angular/core';
import { RestaurantService } from './app.restaurant.service';
import { UserService } from './app.user.service';
import { Authenticate } from './app.authenticate.user';
import { CheckingService } from './app.checking.service';
import { BookingService } from './app.booking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RestaurantService, UserService, Authenticate, CheckingService, BookingService]
})
export class AppComponent {
  title = 'app';
  constructor() {
    localStorage.clear();
  }
}
