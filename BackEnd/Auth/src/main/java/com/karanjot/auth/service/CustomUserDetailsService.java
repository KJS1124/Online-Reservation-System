package com.karanjot.auth.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.karanjot.auth.entity.CustomUserDetails;
import com.karanjot.auth.entity.User;
import com.karanjot.auth.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository usersRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> optionalUsers = usersRepository.findByEmail(username);

        optionalUsers
                .orElseThrow(() -> new UsernameNotFoundException("Username not found"));
        return optionalUsers
                .map(CustomUserDetails::new).get();
    }
}