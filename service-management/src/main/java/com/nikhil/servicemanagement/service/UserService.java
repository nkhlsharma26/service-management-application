package com.nikhil.servicemanagement.service;

import com.nikhil.servicemanagement.entity.User;
import com.nikhil.servicemanagement.model.UserModel;
import com.nikhil.servicemanagement.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public UserModel getUserDetails(Integer userId) {
        var user = userRepo.findByUserId(userId);
        var um = new UserModel();
        um.setUserId(user.getUserId());
        um.setEmail(user.getEmail());
        um.setUsername(user.getUsername());
        um.setHouses(user.getHouses());

        return um;
    }
}
