package com.nikhil.servicemanagement.service;

import com.nikhil.servicemanagement.entity.AidEntity;
import com.nikhil.servicemanagement.entity.HouseEntity;
import com.nikhil.servicemanagement.model.Aid;
import com.nikhil.servicemanagement.repository.AidRepo;
import com.nikhil.servicemanagement.repository.HouseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ManagerService {
  @Autowired
  private AidRepo aidRepo;

  @Autowired
  HouseRepo houseRepo;

  public List<String> generateApplicationNotification(Integer houseId) {
    var aids = aidRepo.findAll().stream().filter(a -> a.getHouse().getHouseId() == houseId).collect(Collectors.toList());
    List<String> messages = new ArrayList<>();
    for (var aid : aids){
      var startDate = aid.getStartDate();

      var endDate = aid.getEndDate();
      if (endDate.equals(startDate) && aid.isComplete() == false) {
        aid.setComplete(true);
        aidRepo.save(aid);
        messages.add(generateNotification(aid));
      }
      if (endDate.toLocalDate().isBefore(LocalDate.now()) && aid.getRemainingAmount() > 0) {
        messages.add(generatePaymentNotification(aid));
      }
    }

    return messages;
  }

  private String generatePaymentNotification(AidEntity aid) {
    return "Payment for "+aid.getName()+", "+aid.getHouse().getHouseNo()+", "+aid.getHouse().getAddress() + " is pending. If paid already, please update in the app to avoid further notifications";
  }

  private String generateNotification(AidEntity aid) {
    return "Service "+aid.getName()+" for "+aid.getHouse().getHouseNo()+", "+aid.getHouse().getAddress()+" is complete.";
  }

  public void completeAid() {
    List<AidEntity> aidList =  aidRepo.findAll();
    for (AidEntity aid: aidList) {
      if(aid.getEndDate().toLocalDate().isEqual(LocalDate.now())){
        aid.setComplete(true);
        aidRepo.save(aid);
      }
    }
  }

  public List<String> getMissedPayments(int userId) {
    List<String> list = new ArrayList<>();
    List<HouseEntity> houseList = houseRepo.findAllByUserUserId(userId);
    for ( HouseEntity house: houseList) {
      for(AidEntity aid : house.getAids()){
        if(aid.isComplete() && (aid.getRemainingAmount()!=0)){
          list.add("Payment of "+aid.getRemainingAmount()+", is overdue for "+aid.getName()+", House: "+aid.getHouse().getHouseNo()+".");
        }
      }
    }
    return list;
  }

  public List<String> getPaymentNotification(Integer userId) {
    List<String> list = new ArrayList<>();
    List<HouseEntity> houseList = houseRepo.findAllByUserUserId(userId);
    for (HouseEntity house : houseList) {
      for (AidEntity aid : house.getAids()) {
        if(aid.getRemainingAmount()>0 && aid.getEndDate().toLocalDate().isEqual(LocalDate.now()) && aid.isComplete()==false ){
          list.add("Payment of "+aid.getRemainingAmount()+", is due today for "+aid.getName()+", House: "+aid.getHouse().getHouseNo()+".");
        }
      }
    }
    return list;
  }

}
