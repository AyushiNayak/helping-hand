package com.helpinghand.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import java.util.Date;
import java.util.List;

@Entity
public class VolunteerDetail {

  @Id
  private int userId;
  private Date startDate;
  private Date endDate;

  @OneToMany
  @JoinColumn(name = "userId", referencedColumnName = "userId")
  private List<VolunteerCategoryMapping> selectedCategories;

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

  public Date getEndDate() {
    return endDate;
  }

  public void setEndDate(Date endDate) {
    this.endDate = endDate;
  }

  public List<VolunteerCategoryMapping> getSelectedCategories() {
    return selectedCategories;
  }

  public void setSelectedCategories(List<VolunteerCategoryMapping> selectedCategories) {
    this.selectedCategories = selectedCategories;
  }
}
