package com.nikhil.servicemanagement.controller;

import com.nikhil.servicemanagement.model.DEMModel;
import com.nikhil.servicemanagement.service.DEMService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/v1/dem")
@CrossOrigin("*")
public class DailyExpanseManagerController {
    @Autowired
    DEMService demService;

    @PostMapping("/addExpanse")
    public ResponseEntity<DEMModel> addExpanse(@RequestBody DEMModel demModel){
        return ResponseEntity.ok(demService.addExpanse(demModel));
    }

    @GetMapping("getAllExpanses/{username}")
    public ResponseEntity<Map<LocalDate, List<DEMModel>>> getAllExpanses(@PathVariable String username){
        return ResponseEntity.ok(demService.getAllExpanses(username));
    }
}
