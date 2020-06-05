package com.helpinghand.controller;

import com.helpinghand.entity.SeekerDetail;
import com.helpinghand.service.SeekerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class SeekerController {
  @Autowired
  private SeekerService seekerService;

  @PostMapping(path = "/request-help/create")
  public SeekerDetail createSeeker(@RequestBody SeekerDetail seekerDetail){
    seekerService.createSeeker(seekerDetail);
    return seekerDetail;
  }

}
