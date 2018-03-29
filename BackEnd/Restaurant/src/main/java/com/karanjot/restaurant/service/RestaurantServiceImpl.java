package com.karanjot.restaurant.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.karanjot.restaurant.Repository.RestaurentRepository;
import com.karanjot.restaurant.entity.Restaurant;
@Service
public class RestaurantServiceImpl implements RestaurantService{

	@Autowired
	RestaurentRepository restaurantRepo;
	@Override
	public List<Restaurant> findAll() {
		// TODO Auto-generated method stub
		return restaurantRepo.findAll();
	}

	@Override
	public Restaurant findOne(long id) {
		// TODO Auto-generated method stub
		return restaurantRepo.findOne(id);
	}

	@Override
	public List<Restaurant> findByName(String name) {
		// TODO Auto-generated method stub
		return restaurantRepo.findByNameIgnoreCaseContaining(name);
	}

	@Override
	public List<Restaurant> findFamous() {
		// TODO Auto-generated method stub
		return restaurantRepo.findTop12ByRatingLessThanOrderByRatingDesc(6);
	}

}
