package com.helpinghand.service;

import com.helpinghand.entity.User;
import com.helpinghand.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;


  public User findById(long l) {
    User user =  userRepository.findById(l);
    return user;
  }

  public User save(User user) {
    return userRepository.save(user);
  }
}
