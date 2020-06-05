package com.helpinghand.controller;

import com.helpinghand.entity.SeekerDetail;
import com.helpinghand.entity.User;
import com.helpinghand.service.SeekerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SeekerController {
  @Autowired
  private SeekerService seekerService;

  @PostMapping(path = "/request-help/create")
  public SeekerDetail createSeeker(@RequestBody SeekerDetail seekerDetail){
   return seekerService.createSeeker(seekerDetail);
  }


}
