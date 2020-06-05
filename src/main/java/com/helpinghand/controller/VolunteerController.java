package com.helpinghand.controller;

import com.helpinghand.entity.VolunteerDetail;
import com.helpinghand.service.VolunteerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VolunteerController {

  @Autowired
  private VolunteerService volunteerService;

  @GetMapping(path = "/volunteer/create")
  public VolunteerDetail createVolunteer(VolunteerDetail volunteerDetail) {
    volunteerService.createVolunteer(volunteerDetail);
    return volunteerDetail;
  }

}
