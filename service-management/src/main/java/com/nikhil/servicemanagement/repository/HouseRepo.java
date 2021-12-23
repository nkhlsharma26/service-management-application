package com.nikhil.servicemanagement.repository;

import com.nikhil.servicemanagement.entity.HouseEntity;
import com.nikhil.servicemanagement.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HouseRepo extends JpaRepository<HouseEntity, Integer> {

  Boolean existsByHouseNo(String houseNo);
  List<HouseEntity> findAllByUserUserId(int userId);
}
