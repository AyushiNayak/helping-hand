package com.helpinghand.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

@Entity
public class SeekerDetail implements Serializable {

  private Date startDate;
  private int category;
  private String description;
  private int volunteerAssigned;

  @Id
  @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
  @JoinColumn(name =  "id")
  private User user;

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

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    SeekerDetail that = (SeekerDetail) o;
    return Objects.equals(user, that.user);
  }

  @Override
  public int hashCode() {

    return Objects.hash(user);
  }
}
