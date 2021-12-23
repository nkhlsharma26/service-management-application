package com.nikhil.servicemanagement.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.nikhil.servicemanagement.entity.HouseEntity;
import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.OneToMany;
import java.util.List;

@Data
public class UserModel {
    private int userId;
    private String username;
    private String password;
    private String email;
    private List<HouseEntity> houses;
}
