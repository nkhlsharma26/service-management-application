package com.nikhil.servicemanagement.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Positive;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "aid")
public class AidEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int aidId;

  private String name;

  private Date startDate;

  private Date endDate;

  private int costOfService;

  /*@OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "payment_id", referencedColumnName = "paymentId")
  private PaymentEntity payment;*/

  @OneToMany( mappedBy = "aid", cascade = CascadeType.ALL)
  @JsonManagedReference
  private List<PaymentEntity> payments = new ArrayList<>();

  private int remainingAmount;

  @Column(columnDefinition = "BOOLEAN")
  private boolean isComplete;

  @ManyToOne
  @JoinColumn(name = "house_id")
  @JsonBackReference
  private HouseEntity house;
}
