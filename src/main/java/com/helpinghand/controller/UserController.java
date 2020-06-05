package com.helpinghand.controller;

import com.helpinghand.entity.User;
import com.helpinghand.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

  @Autowired
  private UserService userService;

  @PostMapping("/user/create")
  public int createUser(@RequestBody  User user) {
	  userService.save(user);
    return 1;
  }

  @GetMapping("/user/{userId}")
  public User userDetails(@PathVariable("userId") Long userId) {
    return userService.findById(userId);
  }

}
