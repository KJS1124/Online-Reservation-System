package com.karanjot.restaurant.Repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.karanjot.restaurant.entity.Restaurant;
@Repository
@Transactional
public interface RestaurentRepository extends JpaRepository<Restaurant, Long> {

	List<Restaurant> findByNameIgnoreCaseContaining(String name);
	List<Restaurant> findTop12ByRatingLessThanOrderByRatingDesc(int id);
}
