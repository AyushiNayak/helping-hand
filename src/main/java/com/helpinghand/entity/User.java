package com.helpinghand.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.util.Date;

@Entity
public class User {

  @Id
  private Long id;
  private String firstName;
  private String lastName;
  private String  email;
  private String gender;
  private String dateofbirth;
  private String occupation;
  private String role ;
  private Date createDate = new Date() ;


  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "id", referencedColumnName = "address_id")
  private Address address;
  protected User() {
  }


  @Override
  public String toString() {
    return String.format(
      "User[id=%d, firstName='%s', lastName='%s']",
      id, firstName, lastName);
  }
  public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDateofbirth() {
		return dateofbirth;
	}

	public void setDateofbirth(String dateofbirth) {
		this.dateofbirth = dateofbirth;
	}

	public String getOccupation() {
		return occupation;
	}

	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

  public void setId(Long id) {
    this.id = id;
  }

  public Long getId() {
    return id;
  }

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public Address getAddress() {
    return address;
  }

  public void setAddress(Address address) {
    this.address = address;
  }

  public Date getCreateDate() {
    return createDate;
  }

  public void setCreateDate(Date createDate) {
    this.createDate = createDate;
  }

}



