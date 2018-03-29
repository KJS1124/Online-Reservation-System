package com.karanjot.booking.repository;


import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.karanjot.booking.entity.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
	
	List<Booking> findByUserIdAndBookingOnAfter(long id,LocalDateTime date);

	List<Booking> findByRidAndBookingOnInOrBookingTillIn(long rid, LocalDateTime bookingOn, LocalDateTime bookingTill);
}
