package com.karanjot.booking.util;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

@Component
public class DateDeserializer extends JsonDeserializer<Date> {

	private static final SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
	@Override
	public Date deserialize(JsonParser parser, DeserializationContext arg1) throws IOException, JsonProcessingException {
		// TODO Auto-generated method stub
		String date = parser.getText();
		try {
			return format.parse(date);
		}
		catch(ParseException e)
		{
			e.printStackTrace();
		}
		return null;
	}

}
