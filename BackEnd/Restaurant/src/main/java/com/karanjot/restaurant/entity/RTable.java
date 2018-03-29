package com.karanjot.restaurant.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="rtable")
public class RTable {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="table_id")
	long id;
	
	
	@Column(name="seats")
	int noOfSeats;
	
	@Column(name="table_type")
	String type;
	
	@Column(name="price")
	int price;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getNoOfSeats() {
		return noOfSeats;
	}

	public void setNoOfSeats(int noOfSeats) {
		this.noOfSeats = noOfSeats;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}
	

}
