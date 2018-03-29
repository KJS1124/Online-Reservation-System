package com.karanjot.booking.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.karanjot.booking.entity.Booking;
import com.karanjot.booking.repository.BookingRepository;

@Service
public class BookingServiceImpl implements BookingService {

	@Autowired
	BookingRepository bookingRepo;

	@Override
	public List<Booking> getBookings(long id,LocalDateTime date) {
		// TODO Auto-generated method stub

		return bookingRepo.findByUserIdAndBookingOnAfter(id,date);
	}

	@Override
	public Booking insert(Booking booking) {
		List<Booking> list = bookingRepo.findByRidAndBookingOnInOrBookingTillIn(booking.getRid(),
				booking.getBookingOn(), booking.getBookingTill());
		if (list.size() > 0)
			throw new RuntimeException("Already Exits");
		return bookingRepo.save(booking);
	}

}
