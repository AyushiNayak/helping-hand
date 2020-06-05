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
public class VolunteerController {

  @Autowired
  private VolunteerService volunteerService;

  @Autowired
  private SeekerService seekerService;


  @PostMapping(path = "/volunteers/create")
  public List<User> createVolunteer(@RequestBody VolunteerDetail volunteerDetail) {
    volunteerService.createVolunteer(volunteerDetail);
    return seekerService.fetchSeekers(volunteerDetail);
  }

  @PostMapping(path = "/volunteers/available")
  public List<User> fetchVolunteers(@RequestBody SeekerDetail seekerDetail){
    return volunteerService.fetchVolunteers(seekerDetail);
  }

}
