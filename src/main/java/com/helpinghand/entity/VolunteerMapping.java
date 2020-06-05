package com.helpinghand.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class VolunteerMapping {

  @Id
  private int volunteerId;
  @Id
  private int seekerId;

  public int getVolunteerId() {
    return volunteerId;
  }

  public void setVolunteerId(int volunteerId) {
    this.volunteerId = volunteerId;
  }

  public int getSeekerId() {
    return seekerId;
  }

  public void setSeekerId(int seekerId) {
    this.seekerId = seekerId;
  }
}
