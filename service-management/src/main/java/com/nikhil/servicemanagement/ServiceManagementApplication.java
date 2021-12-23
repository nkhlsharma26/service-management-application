package com.nikhil.servicemanagement;

import com.nikhil.servicemanagement.service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

@SpringBootApplication
@EnableScheduling
public class ServiceManagementApplication {

	@Autowired
	private ManagerService managerService;

	public static void main(String[] args) {
		SpringApplication.run(ServiceManagementApplication.class, args);
	}

	@Scheduled(cron = "0 15 18 * * *")
	public void serviceChecker(){
		managerService.completeAid();
	}

}
