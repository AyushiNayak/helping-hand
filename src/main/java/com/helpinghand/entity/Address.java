package com.helpinghand.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Address {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "address_id")
  private Long id;
  private String firstLine;
  private String state;
  private String city;
  private int pinCode;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getFirstLine() {
    return firstLine;
  }

  public void setFirstLine(String firstLine) {
    this.firstLine = firstLine;
  }

  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public int getPinCode() {
    return pinCode;
  }

  public void setPinCode(int pinCode) {
    this.pinCode = pinCode;
  }
}
