package com.helpinghand.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class SeekerDetail {

  @Id
  private int userId;
  private Date startDate;
  private int category;
  private String description;
  private int volunteerAssigned;

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
  }

  public Date getStartDate() {
    return startDate;
  }

  public void setStartDate(Date startDate) {
    this.startDate = startDate;
  }

  public int getVolunteerAssigned() {
    return volunteerAssigned;
  }

  public void setVolunteerAssigned(int volunteerAssigned) {
    this.volunteerAssigned = volunteerAssigned;
  }

  public int getCategory() {
    return category;
  }

  public void setCategory(int category) {
    this.category = category;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

}
