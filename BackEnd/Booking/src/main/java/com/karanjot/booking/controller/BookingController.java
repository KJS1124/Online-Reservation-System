package com.karanjot.booking.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.amqp.core.Queue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.karanjot.booking.entity.Booking;
import com.karanjot.booking.entity.Email;
import com.karanjot.booking.service.BookingService;
import com.karanjot.booking.util.Producer;

@RestController
@EnableResourceServer 
public class BookingController {

	@Autowired
	BookingService bookingService;

	@Autowired
	Producer producer;

	@Value("${queue}")
	String queue;

	@Bean
	Queue getQueue() {
		return new Queue(queue, false);
	}
	
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Booking> insert(@RequestBody Booking booking,@RequestParam("email")String email) {
		System.out.println(email);
		Booking reponse = bookingService.insert(booking);
		if (reponse != null)
			producer.sendTo(queue, new Email(email, "Your table is booked for date "+ booking.getBookingOn()));
		return new ResponseEntity<Booking>(reponse,HttpStatus.OK);

	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Booking> getBooking(@PathVariable("id")long id,@RequestParam("date") String date) {
		LocalDateTime d = null;
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
		d = LocalDateTime.parse(date,formatter);
		return bookingService.getBookings(id,d);
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(value = "/test")
	public String test() {
		return "Up and Running";
	}
}
