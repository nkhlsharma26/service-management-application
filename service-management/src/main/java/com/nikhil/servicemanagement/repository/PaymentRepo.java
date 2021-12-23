package com.nikhil.servicemanagement.repository;

import com.nikhil.servicemanagement.entity.PaymentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRepo extends JpaRepository<PaymentEntity, Integer> {
    
    List<PaymentEntity> findByAid_AidId(int aidId);
}
