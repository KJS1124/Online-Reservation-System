package com.karanjot.booking.util;

import java.io.IOException;
import java.time.LocalDateTime;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

@Component
public class DateTimeSerializer extends JsonSerializer<LocalDateTime>{
    
	@Override
	public void serialize(LocalDateTime dateTime, JsonGenerator generator, SerializerProvider arg2)
			throws IOException, JsonProcessingException {
		// TODO Auto-generated method stub
		String formattedDate = dateTime.toString();
        generator.writeString(formattedDate);
	}
}
