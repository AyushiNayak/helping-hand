package com.helpinghand.service;

import com.helpinghand.entity.SeekerDetail;
import com.helpinghand.repository.SeekerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SeekerService {
  @Autowired
  private SeekerRepository seekerRepository;

  public SeekerDetail createSeeker(SeekerDetail seekerDetail){
    return seekerRepository.save(seekerDetail);
  }

}
