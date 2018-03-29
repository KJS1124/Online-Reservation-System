package com.karanjot.auth.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.karanjot.auth.entity.User;
@Repository
public interface UserRepository extends JpaRepository<User,Long> {
	Optional<User> findByName(String username);
	Optional<User> findByEmail(String email);
}
