package com.nikhil.servicemanagement.repository;

import com.nikhil.servicemanagement.entity.AidEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AidRepo extends JpaRepository<AidEntity, Integer> {
  Boolean existsByName(String houseNo);

  AidEntity findByName(String name);

  /*@Modifying
  @Query("update AidEntity a set a.name = aid.name, a.startDate = aid.startDate where u.lastLoginDate < :date")
  Boolean updateAid(AidEntity aid);*/
}
