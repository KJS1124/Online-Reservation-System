package com.karanjot.restaurant.service;

import java.util.List;
import java.util.Optional;

import com.karanjot.restaurant.entity.Restaurant;

public interface RestaurantService {
	List<Restaurant> findAll();
	Restaurant findOne(long id);
	List<Restaurant> findByName(String name);
	List<Restaurant> findFamous();
}
