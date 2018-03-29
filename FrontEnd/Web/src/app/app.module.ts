import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './home/intro/intro.component';
import { LoginComponent } from './login/login.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantListComponent } from './restaurants/restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './restaurants/restaurant-list/restaurant/restaurant.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppRoutingModule } from './app-routing.module';
import { FamousComponent } from './home/famous/famous.component';
import { RestaurantService } from './app.restaurant.service';
import { BookingDoneComponent } from './booking-done/booking-done.component';
import { CheckingService } from './app.checking.service';
import { UserService } from './app.user.service';
import { Authenticate } from './app.authenticate.user';
import { BookingService } from './app.booking.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    LoginComponent,
    RestaurantsComponent,
    RestaurantListComponent,
    RestaurantComponent,
    HomeComponent,
    RegistrationComponent,
    PagenotfoundComponent,
    FamousComponent,
    BookingDoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [RestaurantService, CookieService, CheckingService, UserService, Authenticate, BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
