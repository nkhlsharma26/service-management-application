package com.nikhil.servicemanagement.service;

import com.nikhil.servicemanagement.entity.AidEntity;
import com.nikhil.servicemanagement.entity.PaymentEntity;
import com.nikhil.servicemanagement.model.Aid;
import com.nikhil.servicemanagement.model.Payment;
import com.nikhil.servicemanagement.repository.AidRepo;
import com.nikhil.servicemanagement.repository.PaymentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;

@Service
public class PaymentService {

    @Autowired
    PaymentRepo paymentRepo;

    @Autowired
    AidRepo aidRepo;

    public PaymentEntity addPayment(int aidId, Payment payment){
        PaymentEntity pe = new PaymentEntity();
        AidEntity ae = new AidEntity();
        ae.setAidId(aidId);
        pe.setAid(ae);
        pe.setAmount(payment.getAmount());
        pe.setTimeStamp(new Timestamp(System.currentTimeMillis()));
        pe.setComment(payment.getComment());

        var result = paymentRepo.save(pe);

        // update remaining balance for this aid
        var previousPayments = paymentRepo.findByAid_AidId(aidId);
        var totalPayments = previousPayments.stream().mapToInt(PaymentEntity::getAmount).sum();
        var aidEntity = aidRepo.getById(aidId);
        aidEntity.setRemainingAmount((aidEntity.getCostOfService()-totalPayments));
        aidRepo.save(aidEntity);

        return result;
    }
}
