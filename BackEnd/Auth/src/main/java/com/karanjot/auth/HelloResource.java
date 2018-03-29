package com.karanjot.auth;

import java.security.Principal;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest")
public class HelloResource {

	//@CrossOrigin(origins = "http://localhost:8084")
	@RequestMapping("/user")
	public Principal user(Principal user) {
		System.out.println("Hello world");
	      return user;
	   }
	@CrossOrigin(origins = "http://localhost:4200")
	@PreAuthorize("hasAnyRole('ADMIN')")
	@GetMapping
	public String hello() {
		return "Hello World";
	}

}
