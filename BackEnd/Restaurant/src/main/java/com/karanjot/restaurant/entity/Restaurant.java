package com.karanjot.restaurant.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="restaurant")
public class Restaurant {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="id")
	long id;
	
	@Column(name="name")
	String name;
	
	@Column(name="location")
	String location;
	
	@Column(name="descs")
	String desc;
	
	public String getImage() {
		return image;
	}
	@Column(name="rating")
	int rating;
	
	@Column(name="mobile_no")
	String mobileNo;
	
	@Column(name="image")
	String image;
	
	@OneToMany
	Set<RTable> tables;
	@ManyToMany
	Set<Item> items;
	
	
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
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}

	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public Set<RTable> getTables() {
		return tables;
	}
	public void setTables(Set<RTable> tables) {
		this.tables = tables;
	}
	public Set<Item> getItems() {
		return items;
	}
	public void setItems(Set<Item> items) {
		this.items = items;
	}
	public void setTable(Set<RTable> table) {
		this.tables = table;
	}

}
