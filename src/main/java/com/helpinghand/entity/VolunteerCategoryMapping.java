package com.helpinghand.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class VolunteerCategoryMapping {

  @Id
  private int userId;
  private int category;

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
  }

  public int getCategory() {
    return category;
  }

  public void setCategory(int category) {
    this.category = category;
  }
}
