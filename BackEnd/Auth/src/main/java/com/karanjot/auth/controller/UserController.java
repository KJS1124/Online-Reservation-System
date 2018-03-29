package com.karanjot.auth.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.karanjot.auth.entity.User;
import com.karanjot.auth.service.UserService;

@RestController
public class UserController {

	@Autowired
	UserService service;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value="/signup",method=RequestMethod.POST,consumes=MediaType.APPLICATION_JSON_VALUE,produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> insert(@RequestBody User user) {
		Optional<User> temp = service.check(user.getEmail());
		if(temp.isPresent())
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		return new ResponseEntity<User>(service.insert(user),HttpStatus.CREATED);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value="/user/{email}",method=RequestMethod.GET,produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> getUser(@PathVariable(name="email") String email) {
		User temp = service.findByEmail(email+".com");
		if(temp!=null)
			return new ResponseEntity<User>(temp,HttpStatus.OK);
		
		return new ResponseEntity<User>(temp,HttpStatus.NOT_FOUND);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(value = "/user" , method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<User>> getUsers(){
		return new ResponseEntity<List<User>>(service.findUsers(),HttpStatus.OK);
	}
}
