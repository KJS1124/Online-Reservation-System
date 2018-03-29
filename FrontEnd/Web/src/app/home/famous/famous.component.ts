import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../app.restaurant.service';
import { Restaurant } from '../../shared/Restaurant';
import { Observable } from 'rxJS/Observable';

@Component({
  selector: 'app-famous',
  templateUrl: './famous.component.html',
  styleUrls: ['./famous.component.css']
})
export class FamousComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getFamousFamousRestaurants().subscribe(
      (restaurants: any[]) => { console.log(restaurants); this.restaurants = restaurants; },
      (error) => console.log(error)
    );
  }

}
