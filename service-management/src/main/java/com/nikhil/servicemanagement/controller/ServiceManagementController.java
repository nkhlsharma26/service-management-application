package com.nikhil.servicemanagement.controller;

import com.nikhil.servicemanagement.entity.PaymentEntity;
import com.nikhil.servicemanagement.entity.User;
import com.nikhil.servicemanagement.model.*;
import com.nikhil.servicemanagement.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@RestController()
@RequestMapping("/v1")
@CrossOrigin("*")
public class ServiceManagementController {
  @Autowired
  private AidService aidService;

  @Autowired
  private HouseService houseService;

  @Autowired
  private ManagerService managerService;

  @Autowired
  private PaymentService paymentService;

  @Autowired
  private TokenService tokenService;

  @Autowired
  private RegisterService registerService;

  @Autowired
  private UserService userService;

  @PostMapping("/register")
  public ResponseEntity<User> registerUser(@RequestBody UserModel user){
    return ResponseEntity.ok(registerService.registerUser(user));
  }

  @PostMapping("/authenticate")
  public ResponseEntity<AuthResponse> generateToken(@RequestBody AuthRequest authRequest) {
    try {
      var response = tokenService.getToken(authRequest);
      return ResponseEntity.ok(response);
    } catch (Exception e) {
      return ResponseEntity.status(400).build();
    }
  }

  @PostMapping("/{userId}/addHouse")
  public ResponseEntity<House> addHouse(@PathVariable Integer userId, @RequestBody House house){
    return ResponseEntity.ok(houseService.addHouse(userId, house));
  }

  @PostMapping("/{houseId}/addAid")
  public ResponseEntity<Aid> addAid(@PathVariable(name = "houseId") Integer houseId, @RequestBody Aid aid){

    return ResponseEntity.ok(aidService.addAid(houseId, aid));
  }

  @PutMapping("/{houseId}/updateAid")
  public ResponseEntity<Aid> updateAid(@PathVariable Integer houseId, @RequestBody Aid aid){
    return ResponseEntity.ok(aidService.updateAid(houseId, aid));
  }

  @GetMapping("/{houseId}/getAllAidsForHouse")
  public List<Aid> getAllAids(@PathVariable Integer houseId){
    return aidService.getAllAidsForGivenHouse(houseId);
  }

  @GetMapping("/getAid/{aidId}")
  public Aid getAid(@PathVariable Integer aidId){
    return aidService.getAidById(aidId);
  }

  @GetMapping("/{houseId}/getLatestServiceUpdate")
  public List<String> latestServiceUpdate(@PathVariable Integer houseId){
    return managerService.generateApplicationNotification(houseId);
  }

  @GetMapping("/{username}/getAllHousesForUser")
  public List<House> getAllHouses(@PathVariable String username){
    return houseService.getAllHousesForUser(username);
  }

  @PostMapping("/addPayment/{aidId}")
  public PaymentEntity addPayment(@PathVariable Integer aidId, @RequestBody Payment payment){
    return paymentService.addPayment(aidId, payment);
  }

  @GetMapping("/getMissedPayments/{userId}")
  public List<String> getMissedPaymentNotification(@PathVariable Integer userId){
    return managerService.getMissedPayments(userId);
  }

  @GetMapping("/getPaymentNotification/{userId}")
  public List<String> getPaymentNotification(@PathVariable Integer userId){
    return managerService.getPaymentNotification(userId);
  }

  @GetMapping("/getUser/{userId}")
  public UserModel getUserByUserId(@PathVariable Integer userId){
    return userService.getUserDetails(userId);
  }
}
