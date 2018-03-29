package com.karanjot.restaurant.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.karanjot.restaurant.entity.Restaurant;
import com.karanjot.restaurant.service.RestaurantService;

@RestController
public class RestaurantController {

	@Autowired
	RestaurantService restoService;

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Restaurant>> getALl() {
		return new ResponseEntity<List<Restaurant>>(restoService.findAll(), HttpStatus.OK);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Restaurant> get(@PathVariable(name="id")long id) {
		return new ResponseEntity<Restaurant>(restoService.findOne(id), HttpStatus.OK);
	}

	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/name/{n}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Restaurant>> getbyName(@PathVariable(name="n")String name) {
		
		return new ResponseEntity<List<Restaurant>>(restoService.findByName(name),HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/famous" , method = RequestMethod.GET , produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Restaurant>> getFamous(){
		return new ResponseEntity<List<Restaurant>>(restoService.findFamous(),HttpStatus.OK);
	}
}
