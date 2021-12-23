package com.nikhil.servicemanagement.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.OneToOne;
import java.sql.Date;
import java.sql.Timestamp;

@Data
public class Payment {
  private int paymentId;
  private int amount;
  private Timestamp timeStamp;
  private String comment;
  @JsonBackReference
  private Aid aid;
}
