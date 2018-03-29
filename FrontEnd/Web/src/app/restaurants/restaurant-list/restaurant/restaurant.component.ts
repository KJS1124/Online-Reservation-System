import { Component, OnInit, ElementRef } from '@angular/core';
import { RestaurantService } from '../../../app.restaurant.service';
import { Observable } from 'rxJS/Observable';
import { Restaurant } from '../../../shared/Restaurant';
import { Item } from '../../../shared/Item';
import { Table } from '../../../shared/Table';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../../app.booking.service';
import { Authenticate } from '../../../app.authenticate.user';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurant: Restaurant;
  table: string;
  selectedTable: Table;
  selectedItems = new Map<string, { quantity: number, price: number }>();
  totalBill = 0;
  bookingdate;
  bookingtime;
  bookingtill;
  constructor(private restaurantService: RestaurantService
    , private activeLink: ActivatedRoute
    , private route: Router
    , private bookingService: BookingService
    , private auth: Authenticate) { }

  ngOnInit() {
    this.restaurantService.getRestaurant(+this.activeLink.snapshot.params['id']).subscribe(
      (restaurants: any) => this.restaurant = restaurants,
      (error) => console.log(error)
    );
  }

  tableSelected(table: Table) {
    if (this.selectedTable != null) {
      this.totalBill -= this.selectedTable.price;
    }
    this.totalBill += table.price;
    this.selectedTable = table;
  }

  getList(n: number) {
    return Array.apply(null, { length: n - 1 }).map(Number.call, Number);
  }

  onChange(data: any, name: string, price: number) {
    const quantity = +(<HTMLInputElement>data.target).value;
    if (quantity === 0) {
      this.selectedItems.delete(name);
    }
    if (this.selectedTable != null) {
      this.totalBill = this.selectedTable.price;
    } else {
      this.totalBill = 0;
    }
    this.selectedItems.set(name, { quantity, price });
    this.selectedItems.forEach((value: { quantity, price }, key: string) => {
      this.totalBill += value.quantity * value.price;
    });
  }

  booking() {
    if (this.bookingdate === undefined || this.bookingtill === undefined || this.bookingtime === undefined) {

      return alert('Fill Details');
    }
    const obj = {
      'userId': this.auth.userId,
      'rid': +this.activeLink.snapshot.params['id'],
      'tableID': this.selectedTable.id,
      'items': [],
      'bookingOn': this.bookingdate + 'T' + this.bookingtime,
      'bookingTill': this.bookingdate + 'T' + this.bookingtill,
    };
    this.selectedItems.forEach((value: { quantity, price }, key: string) => {
      obj.items.push({ 'name': key, price: value.price, quantity: value.quantity });
    });
    console.log(obj);
    localStorage.setItem('bookingObj', JSON.stringify(obj));
    if (localStorage.getItem('currentUser') != null) {
      this.route.navigate(['/bookingsuccess']);
    } else {
      this.route.navigate(['/login']);
    }
  }
}
