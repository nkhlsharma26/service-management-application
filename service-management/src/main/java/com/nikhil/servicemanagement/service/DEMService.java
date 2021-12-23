package com.nikhil.servicemanagement.service;

import com.nikhil.servicemanagement.entity.DEMEntity;
import com.nikhil.servicemanagement.model.DEMModel;
import com.nikhil.servicemanagement.repository.DEMRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class DEMService {
    @Autowired
    DEMRepo demRepo;
    public DEMModel addExpanse(DEMModel demModel){
        DEMEntity demEntity = new DEMEntity();
        demEntity.setAmount(demModel.getAmount());
        demEntity.setDate(demModel.getDate());
        demEntity.setUsername(demModel.getUsername());
        demEntity.setComment(demModel.getComment());

        var result = demRepo.save(demEntity);
        return new DEMModel(result.getId(), result.getUsername(), result.getDate(), result.getComment(), result.getAmount());
    }

    public Map<LocalDate, List<DEMModel>> getAllExpanses(String username) {
        var expanseEntity = demRepo.findByUsername(username);
        var list = expanseEntity.stream().map(e -> {
            DEMModel model = new DEMModel();
            model.setAmount(e.getAmount());
            model.setDate(e.getDate());
            model.setComment(e.getComment());
            model.setUsername(e.getUsername());
            model.setId(e.getId());
            return model;
        }).collect(Collectors.toList());
        var result = list.stream().sorted(Comparator.comparing(DEMModel::getDate, Comparator.reverseOrder())).collect(Collectors.groupingBy(r -> r.getDate()));

        /*Map<LocalDate, List<DEMModel>> sortedResults = new TreeMap<>(Collections.reverseOrder());
        for (Map.Entry<LocalDate, List<DEMModel>> entry: result.entrySet()) {
            sortedResults.put(entry.getKey(), entry.getValue());
        }*/
        return result;
    }
}
