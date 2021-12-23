package com.nikhil.servicemanagement.service;

import com.nikhil.servicemanagement.entity.AidEntity;
import com.nikhil.servicemanagement.entity.HouseEntity;
import com.nikhil.servicemanagement.entity.PaymentEntity;
import com.nikhil.servicemanagement.model.Aid;
import com.nikhil.servicemanagement.model.House;
import com.nikhil.servicemanagement.model.Payment;
import com.nikhil.servicemanagement.repository.AidRepo;
import com.nikhil.servicemanagement.repository.HouseRepo;
import com.nikhil.servicemanagement.repository.PaymentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import java.sql.Timestamp;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class AidService {
  @Autowired
  private AidRepo aidRepo;

  @Autowired
  private HouseRepo houseRepo;

  @Autowired
  private PaymentRepo paymentRepo;

  public Aid addAid(Integer houseId, Aid aid) {
    var houseAids = houseRepo.getById(houseId).getAids();
    if (houseAids.size() > 0) {
      //check if aid already exists
      var houseAid = houseAids.stream().filter(a -> a.getName().equalsIgnoreCase(aid.getName())).findFirst().orElse(null);
      if (houseAid != null) {
        throw new IllegalArgumentException("An incomplete service with this name already exists. Please complete that before adding it again or use a different name.");
      }
      return saveAid(aid);

    }
    else{
      return saveAid(aid);
    }
  }

  private Aid saveAid(Aid aid) {
    var aidEntity = new AidEntity();
    HouseEntity he = new HouseEntity();
    he.setHouseId(aid.getHouse().getHouseId());
    aidEntity.setHouse(he);
    aidEntity.setName(aid.getName());
    aidEntity.setStartDate(aid.getStartDate());
    aidEntity.setEndDate(aid.getEndDate());
    aidEntity.setComplete(false);
    aidEntity.setCostOfService(aid.getCostOfService());

    var paymentList = new ArrayList<PaymentEntity>();
    if (aid.getPayments() != null) {
      for (var payment:aid.getPayments() ) {
        var p = new PaymentEntity();
        p.setAid(aidEntity);
        p.setAmount(payment.getAmount());
        p.setTimeStamp(new Timestamp(System.currentTimeMillis()));
        p.setComment(payment.getComment());
        paymentList.add(p);
      }
    }
    //PaymentEntity pe = new PaymentEntity();
    //pe.setAid(aidEntity);
    aidEntity.setPayments(paymentList);
    aidEntity.setRemainingAmount(aid.getCostOfService() - paymentList.stream().mapToInt(PaymentEntity::getAmount).sum());


    var result = aidRepo.save(aidEntity);
    var paymentResult = result.getPayments();//paymentRepo.saveAll(paymentList);

    var aidResp = new Aid();
    aidResp.setAidId(result.getAidId());
    aidResp.setName(result.getName());
    aidResp.setStartDate(result.getStartDate());
    aidResp.setEndDate(result.getEndDate());
    aidResp.setCostOfService(result.getCostOfService());
    aidResp.setRemainingAmount(result.getRemainingAmount());
    aidResp.setPayments(paymentResult.stream().map(p ->{
      var pymt = new Payment();
      pymt.setAmount(p.getAmount());
      pymt.setComment(p.getComment());
      pymt.setTimeStamp(p.getTimeStamp());
      pymt.setPaymentId(p.getPaymentId());
      Aid aid1 = new Aid();
      aid1.setAidId(p.getAid().getAidId());
      pymt.setAid(aid1);
      return pymt;
    }).collect(Collectors.toList()));
    var house = new House();
    house.setHouseId(result.getHouse().getHouseId());
    aidResp.setHouse(house);

    return aidResp;
  }

  public Aid updateAid(Integer houseId, Aid aid) {
    var house = houseRepo.findById(houseId);
    var aidEntity = house.get().getAids().stream().filter(a -> a.getAidId() == aid.getAidId()).findFirst().get();

    aidEntity.setName(aid.getName());
    aidEntity.setCostOfService(aid.getCostOfService());
    aidEntity.setStartDate(aid.getStartDate());
    aidEntity.setEndDate(aid.getEndDate());
    var amountPaid = aidEntity.getPayments().stream().mapToInt(PaymentEntity::getAmount).sum();
    aidEntity.setRemainingAmount(aid.getCostOfService()-amountPaid);

    var result = aidRepo.save(aidEntity);

    House houseResp = new House();
    houseResp.setHouseId(result.getHouse().getHouseId());
    houseResp.setHouseNo(result.getHouse().getHouseNo());
    houseResp.setAddress(result.getHouse().getAddress());

    Aid aidResp = new Aid();
    aidResp.setAidId(result.getAidId());
    aidResp.setName(result.getName());
    aidResp.setStartDate(result.getStartDate());
    aidResp.setEndDate(result.getEndDate());
    aidResp.setHouse(houseResp);
    aidResp.setRemainingAmount(result.getRemainingAmount());
    aidResp.setComplete(result.isComplete());

    List<Payment> paymentResp = new ArrayList<>();
    for (var payment:result.getPayments()) {
      var p = new Payment();
      p.setPaymentId(payment.getPaymentId());
      p.setAid(aidResp);
      p.setAmount(payment.getAmount());
      p.setComment(payment.getComment());
      p.setTimeStamp(payment.getTimeStamp());
      paymentResp.add(p);
    }
    aidResp.setPayments(paymentResp);
    return aidResp;
  }

  public List<Aid> getAllAidsForGivenHouse(Integer houseId) {
    var aidEntity = aidRepo.findAll().stream().filter(a -> a.getHouse().getHouseId() == houseId).collect(Collectors.toList());
    return aidEntity.stream().map(temp -> {
      Aid aid = new Aid();
      aid.setAidId(temp.getAidId());
      aid.setStartDate(temp.getStartDate());
      aid.setEndDate(temp.getEndDate());
      aid.setName(temp.getName());
      aid.setRemainingAmount(temp.getRemainingAmount());
      aid.setComplete(temp.isComplete());
      aid.setPayments(temp.getPayments().stream().map(p ->{
        var pymt = new Payment();
        pymt.setPaymentId(p.getPaymentId());
        pymt.setAmount(p.getAmount());
        pymt.setComment(p.getComment());
        //pymt.setTimeStamp(p.getTimeStamp());
        pymt.setAid(aid);
        return pymt;
      }).collect(Collectors.toList()));
      return aid;
    }).collect(Collectors.toList());
  }

  public Boolean clearBalance(Integer houseId, Integer aidId) {
    boolean result = false;
    var aids = houseRepo.findById(houseId).get().getAids();
    for(AidEntity aid : aids){
      if(aid.getAidId() == aidId){

        result = true;
      }
    }
    return result;
  }

  public Aid getAidById(Integer aidId) {
    var result = aidRepo.getById(aidId);
    House house = new House();
    house.setHouseId(result.getHouse().getHouseId());
    house.setHouseNo(result.getHouse().getHouseNo());
    house.setAddress(result.getHouse().getAddress());

    List<Payment> payments = new ArrayList<>();
    for (var p: result.getPayments()) {
      Payment payment = new Payment();
      payment.setPaymentId(p.getPaymentId());
      payment.setAmount(p.getAmount());
      //payment.setTimeStamp(p.getTimeStamp());
      payment.setComment(p.getComment());
      payments.add(payment);
    }


    Aid aid = new Aid();
    aid.setAidId(result.getAidId());
    aid.setName(result.getName());
    aid.setStartDate(result.getStartDate());
    aid.setEndDate(result.getEndDate());
    aid.setHouse(house);
    aid.setCostOfService(result.getCostOfService());
    aid.setPayments(payments);
    aid.setRemainingAmount(result.getRemainingAmount());
    aid.setComplete(result.isComplete());
    return aid;
  }
}
