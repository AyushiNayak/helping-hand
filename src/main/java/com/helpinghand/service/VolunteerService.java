package com.helpinghand.service;

import com.helpinghand.entity.SeekerDetail;
import com.helpinghand.entity.User;
import com.helpinghand.entity.VolunteerDetail;
import com.helpinghand.repository.UserRepository;
import com.helpinghand.repository.VolunteerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class VolunteerService {

  @Autowired
  private VolunteerRepository volunteerRepository;

  @Autowired
  private UserRepository userRepository;


  public VolunteerDetail createVolunteer(VolunteerDetail volunteerDetail){
    return volunteerRepository.save(volunteerDetail);
  }

  public List<User> fetchVolunteers(SeekerDetail seekerDetail) {
    User user = userRepository.findById(seekerDetail.getUserId());
    List<User> usersList = new ArrayList<>();
    if (user != null) {
      usersList = userRepository.findAvailableVolunteers(seekerDetail.getCategory(), user.getAddress().getState(), user.getAddress().getCity(), seekerDetail.getStartDate());
    }
    return usersList;
  }

}
