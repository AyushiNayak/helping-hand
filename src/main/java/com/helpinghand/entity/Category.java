package com.helpinghand.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "CATEGORY")
public class Category {

  @Id
  private String id;
  @Column(name = "VOLUNTEER_VIEW")
  private String volunteerView;
  @Column(name = "HELP_SEEKER")
  private String helpSeeker;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getVolunteerView() {
    return volunteerView;
  }

  public void setVolunteerView(String volunteerView) {
    this.volunteerView = volunteerView;
  }

  public String getHelpSeeker() {
    return helpSeeker;
  }

  public void setHelpSeeker(String helpSeeker) {
    this.helpSeeker = helpSeeker;
  }
}
