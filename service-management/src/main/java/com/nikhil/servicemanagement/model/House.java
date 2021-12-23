package com.nikhil.servicemanagement.model;

import com.nikhil.servicemanagement.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.OneToMany;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class House {
  private int houseId;
  private String houseNo;
  private String address;
  private List<Aid> aids;
  private UserModel user;
}
