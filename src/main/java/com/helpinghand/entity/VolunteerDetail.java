package com.helpinghand.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
public class VolunteerDetail implements Serializable {

  private Date startDate;
  private Date endDate;

  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
  @JoinColumn(name = "userId")
  private List<VolunteerCategoryMapping> selectedCategories;
  @Id
  private int userId;

  public Date getStartDate() {
    return startDate;
  }

  public void setStartDate(Date startDate) {
    this.startDate = startDate;
  }

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
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
