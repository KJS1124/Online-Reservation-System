package com.karanjot.booking.util;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

@Component
public class DateSerializer extends JsonSerializer<Date> {

	private static final SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

	@Override
	public void serialize(Date date, JsonGenerator generator, SerializerProvider arg2)
			throws IOException, JsonProcessingException {
		String formattedDate = format.format(date);
		generator.writeString(formattedDate);
	}

}
