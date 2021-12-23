package com.nikhil.servicemanagement.repository;

import com.nikhil.servicemanagement.entity.DEMEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DEMRepo extends JpaRepository<DEMEntity, Long> {
    List<DEMEntity> findByUsername(String username);
}
