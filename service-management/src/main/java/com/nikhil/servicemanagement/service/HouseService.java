package com.nikhil.servicemanagement.service;

import com.nikhil.servicemanagement.entity.AidEntity;
import com.nikhil.servicemanagement.entity.HouseEntity;
import com.nikhil.servicemanagement.entity.PaymentEntity;
import com.nikhil.servicemanagement.entity.User;
import com.nikhil.servicemanagement.model.Aid;
import com.nikhil.servicemanagement.model.House;
import com.nikhil.servicemanagement.repository.HouseRepo;
import com.nikhil.servicemanagement.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class HouseService {

  @Autowired
  private HouseRepo houseRepo;

  @Autowired
  private UserRepo userRepo;

  public House addHouse(Integer userId, House house){
    if(!houseRepo.existsByHouseNo(house.getHouseNo())){
      HouseEntity houseEntity = new HouseEntity();
      houseEntity.setHouseNo(house.getHouseNo());
      houseEntity.setAddress(house.getAddress());
      var user = new User();
      user.setUserId(userId);
      /*user.setUsername(house.getUser().getUsername());
      user.setEmail(house.getUser().getEmail());*/
      houseEntity.setUser(user);

      var result = houseRepo.save(houseEntity);
      var houseRep = new House();
      houseRep.setHouseId(result.getHouseId());
      houseRep.setHouseNo(result.getHouseNo());
      houseRep.setAddress(result.getAddress());
      return houseRep;
    }
    return new House();
  }

  public List<House> getAllHousesForUser(String username) {
    var userId = userRepo.findByUsername(username).getUserId();
    return houseRepo.findAll().stream().filter(h->h.getUser().getUserId()==userId).map(he ->{
      House house = new House();
      house.setHouseId(he.getHouseId());
      house.setHouseNo(he.getHouseNo());
      house.setAddress(he.getAddress());
      return house;
    }).collect(Collectors.toList());
  }
}
