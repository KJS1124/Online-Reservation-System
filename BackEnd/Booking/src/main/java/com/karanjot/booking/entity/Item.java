package com.karanjot.booking.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="items")
public class Item {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long id;
	
	@Column(name="name")
	String name;
	
	@Column(name="price")
	double price;
	
	@Column(name="quantity")
	short quantity;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public short getQuantity() {
		return quantity;
	}

	public void setQuantity(short quantity) {
		this.quantity = quantity;
	}
	
	

	
}
