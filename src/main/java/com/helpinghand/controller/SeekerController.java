package com.helpinghand.controller;

import com.helpinghand.entity.SeekerDetail;
import com.helpinghand.entity.User;
import com.helpinghand.entity.VolunteerDetail;
import com.helpinghand.service.SeekerService;
import com.helpinghand.service.VolunteerService;
import org.springframework.beans.factory.annotation.Autowired;
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

  @PostMapping(path = "/request-help/create")
  public List<User> createSeeker(@RequestBody SeekerDetail seekerDetail){
   seekerService.createSeeker(seekerDetail);
   return volunteerService.fetchVolunteers(seekerDetail);
  }

  @PostMapping(path = "/request-help/available")
  public List<User> fetchVolunteers(@RequestBody VolunteerDetail volunteerDetail){
    return seekerService.fetchSeekers(volunteerDetail);
  }

}
