package com.helpinghand.controller;

import com.helpinghand.entity.SeekerDetail;
import com.helpinghand.entity.User;
import com.helpinghand.entity.VolunteerMapping;
import com.helpinghand.repository.RequestRepository;
import com.helpinghand.service.SeekerService;
import com.helpinghand.service.VolunteerService;
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
  @Autowired
  private VolunteerService volunteerService;

  @Autowired
  private RequestRepository requestRepository;

  @PostMapping(path = "/request-help/create")
  public List<User> createSeeker(@RequestBody SeekerDetail seekerDetail){
   seekerService.createSeeker(seekerDetail);
   return volunteerService.fetchVolunteers(seekerDetail);
  }

  @PostMapping(path = "/request-help/request")
  public String request(@RequestBody VolunteerMapping volunteerMapping){
   requestRepository.save(volunteerMapping);
   return "sucess";
  }

}
