package com.karanjot.booking.util;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.karanjot.booking.entity.Email;


@Component
public class Producer {
	
	@Autowired
	RabbitTemplate rabbitTemplate;
	
	public void sendTo(String routingKey,Email email) {
		this.rabbitTemplate.convertAndSend(routingKey, email);
	}

}
