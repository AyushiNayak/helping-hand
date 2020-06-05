package com.helpinghand.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Objects;

@Entity
public class VolunteerDetail implements Serializable {

  private Date startDate;
  private Date endDate;

  @OneToMany
  @JoinColumn(name = "userId")
  private List<VolunteerCategoryMapping> selectedCategories;
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
    VolunteerDetail that = (VolunteerDetail) o;
    return Objects.equals(user, that.user);
  }

  @Override
  public int hashCode() {

    return Objects.hash(user);
  }
}
