package com.helpinghand.service;

import com.helpinghand.entity.SeekerDetail;
import com.helpinghand.entity.User;
import com.helpinghand.repository.SeekerRepository;
import com.helpinghand.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SeekerService {
  @Autowired
  private SeekerRepository seekerRepository;
  @Autowired
  private UserRepository userRepository;


  public SeekerDetail createSeeker(SeekerDetail seekerDetail) {
    return seekerRepository.save(seekerDetail);
  }


}
