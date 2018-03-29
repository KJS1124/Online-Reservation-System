package com.karanjot.booking.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@JsonIdentityInfo(generator=ObjectIdGenerators.IntSequenceGenerator.class, property = "@id", scope = Email.class)
public class Email {

	String to;
	String message;

	public Email(String to, String message) {
		// TODO Auto-generated constructor stub
		this.to = to;
		this.message = message;
	}

	public Email() {
		
	}
	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	@Override
    public String toString() {
        return "Email{" +
                "to=" + to +
                ", message='" + message + '\'' +
                '}';
    }
}
