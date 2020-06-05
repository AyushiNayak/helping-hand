package com.helpinghand.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

@Entity
public class VolunteerMapping implements Serializable {

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

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    VolunteerMapping that = (VolunteerMapping) o;
    return volunteerId == that.volunteerId &&
      seekerId == that.seekerId;
  }

  @Override
  public int hashCode() {

    return Objects.hash(volunteerId, seekerId);
  }
}
