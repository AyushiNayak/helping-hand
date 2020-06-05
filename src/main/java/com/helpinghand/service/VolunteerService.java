package com.helpinghand.service;

import com.helpinghand.entity.VolunteerDetail;
import com.helpinghand.repository.VolunteerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VolunteerService {

  @Autowired
  private VolunteerRepository volunteerRepository;

  public VolunteerDetail createVolunteer(VolunteerDetail volunteerDetail){
    return volunteerRepository.save(volunteerDetail);
  }

}
