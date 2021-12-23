package com.nikhil.servicemanagement.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "house")
public class HouseEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int houseId;

  private String houseNo;
  private String address;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id")
  @JsonBackReference
  @NotNull
  private User user;

  @OneToMany( mappedBy = "house", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
  @JsonManagedReference
  private List<AidEntity> aids = new ArrayList<>();
}
