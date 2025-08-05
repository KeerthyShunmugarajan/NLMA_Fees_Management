package com.feemanagement.demoFees.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Table(name = "Transportation_Fee")
@Data
public class TransportationFees {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long billNumber;
    private String academicYear;
    private LocalDate dateOfBillng;


    private String studentId;
    private String studentName;
    private String currentClass;

    private String route;
    //private Double annualTransportFee;//whats this?
    private String paymentFrequency;
    private Double feeRecieved;
    private String paymentMode;

    //Admin entry
    private Boolean feeReduction;
    private Double amountReduced;
    private String adminRemarks;

}
