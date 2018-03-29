import { Component, OnInit } from '@angular/core';
import { BookingService } from '../app.booking.service';

@Component({
  selector: 'app-booking-done',
  templateUrl: './booking-done.component.html',
  styleUrls: ['./booking-done.component.css']
})
export class BookingDoneComponent implements OnInit {

  result;
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    const obj = JSON.parse(localStorage.getItem('bookingObj'));
    this.bookingService.insertBooking(obj).subscribe(
      (response) => { console.log(response); this.result = 'Booking Complete'; },
      (error) => { console.log(error); this.result = 'Not Able TO Complete Booking Please Try Again'; }
    );
  }

}
