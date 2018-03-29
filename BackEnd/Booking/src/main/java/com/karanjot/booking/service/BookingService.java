package com.karanjot.booking.service;

import java.time.LocalDateTime;
import java.util.List;

import com.karanjot.booking.entity.Booking;

public interface BookingService {

	List<Booking> getBookings(long id,LocalDateTime date);
	Booking insert(Booking booking);
}
