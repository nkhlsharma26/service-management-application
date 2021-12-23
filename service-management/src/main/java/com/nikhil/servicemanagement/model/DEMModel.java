package com.nikhil.servicemanagement.model;

import com.nikhil.servicemanagement.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DEMModel {
    private Long id;
    private String username;
    private LocalDate date;
    private String comment;
    private double amount;
}
