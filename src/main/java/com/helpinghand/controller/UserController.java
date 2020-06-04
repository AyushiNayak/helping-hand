package com.helpinghand.controller;

import com.helpinghand.entity.Address;
import com.helpinghand.entity.User;
import com.helpinghand.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

  @Autowired
  private UserService userService;

  @PostMapping("/user/create")
  public String createUser(@RequestBody  User user) {
    User user2 = new User(1L, "sanjida", "barlaskar");
    Address address = new Address();
    address.setCity("Hyderabad");
    address.setFirstLine("Whitefields");
    address.setState("Telengana");
    address.setPinCode(500084);
    user2.setAddress(address);
    userService.save(user2);
    return "hello";
  }

  @GetMapping("/user/{userId}")
  public User userDetails(@PathVariable("userId") Long userId) {
    return userService.findById(userId);
  }

}
