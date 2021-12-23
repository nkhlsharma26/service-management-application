package com.nikhil.servicemanagement.service;

import com.nikhil.servicemanagement.model.AuthRequest;
import com.nikhil.servicemanagement.model.AuthResponse;
import com.nikhil.servicemanagement.repository.UserRepo;
import com.nikhil.servicemanagement.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class TokenService {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    UserRepo userRepo;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public AuthResponse getToken(AuthRequest authRequest) throws Exception {
        //var password = passwordEncoder.encode(authRequest.getPassword());
        try{
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        }catch (Exception ex){
            throw new Exception("Invalid username or password");
        }

        var user = userRepo.findByUsername(authRequest.getUsername());
        var token = jwtUtil.generateToken(authRequest.getUsername());
        return new AuthResponse(user.getUserId(), token);
    }
}
