package com.nikhil.servicemanagement.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.nikhil.servicemanagement.entity.PaymentEntity;
import lombok.Data;

import javax.validation.constraints.Positive;
import java.sql.Date;
import java.util.List;

@Data
public class Aid {
  private int aidId;
  private String name;
  private Date startDate;

  private Date endDate;

  private int costOfService;

  private int remainingAmount;

  @JsonManagedReference
  private List<Payment> payments;

  private boolean isComplete;

  private House house;
}
