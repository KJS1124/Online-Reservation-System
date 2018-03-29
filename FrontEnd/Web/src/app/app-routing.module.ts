import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RestaurantComponent } from './restaurants/restaurant-list/restaurant/restaurant.component';
import { BookingDoneComponent } from './booking-done/booking-done.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'restaurant/:id', component: RestaurantComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'notfound', component: PagenotfoundComponent },
    { path: 'bookingsuccess', component: BookingDoneComponent },
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
