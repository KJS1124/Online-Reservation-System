import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from '../../app.restaurant.service';
import { Restaurant } from '../../shared/Restaurant';
import { Observable } from 'rxJS/Observable';
@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('list') restaurants: Restaurant[];
  constructor() { }

  ngOnInit() {

  }

}
