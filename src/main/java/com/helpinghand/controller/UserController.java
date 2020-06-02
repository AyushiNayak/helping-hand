package com.helpinghand.controller;

import com.helpinghand.entity.User;
import com.helpinghand.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

  @Autowired
  private UserService userService;

  @GetMapping("/user")
  public String createUser() {
    User user = new User(1L, "sanjida", "barlaskar");

    userService.save(user);
    user = userService.findById(1L);
    return "hello";
  }

}
