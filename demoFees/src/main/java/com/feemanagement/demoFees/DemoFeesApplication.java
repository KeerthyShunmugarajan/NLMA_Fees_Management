package com.feemanagement.demoFees;

import jakarta.persistence.Entity;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EntityScan(basePackages = "com.feemanagement.demoFees.entity")
@EnableTransactionManagement
public class DemoFeesApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoFeesApplication.class, args);
	}

}
