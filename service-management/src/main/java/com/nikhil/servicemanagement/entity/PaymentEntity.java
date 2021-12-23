package com.nikhil.servicemanagement.entity;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Data
@Table(name = "payment")
public class PaymentEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int paymentId;
  private int amount;
  private Timestamp timeStamp;
  private String comment;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "aid_id")
  @JsonBackReference
  private AidEntity aid;
}
