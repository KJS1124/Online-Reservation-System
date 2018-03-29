import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../app.restaurant.service';
import { Restaurant } from '../shared/Restaurant';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];
  searched = false;
  searchedText;
  constructor(private restaurantSerivce: RestaurantService) { }

  ngOnInit() {
    this.restaurantSerivce.getRestaurants().subscribe(
      (restaurants: any[]) => this.restaurants = restaurants,
      (error) => console.log(error)
    );
  }

  onSearch(data: HTMLFormElement) {
    if (data.value === '') {
      return;
    }
    this.searched = true;
    this.searchedText = data.value;
    this.restaurantSerivce.getRestaurantsByName(this.searchedText).subscribe(
      (restaurants: any[]) => { console.log(restaurants); this.restaurants = restaurants; },
      (error) => console.log(error)
    );
  }

  onClear() {
    this.searchedText = '';
    this.searched = false;
    this.restaurantSerivce.getRestaurants().subscribe(
      (restaurants: any[]) => { console.log(restaurants); this.restaurants = restaurants; },
      (error) => console.log(error)
    );
  }
}
