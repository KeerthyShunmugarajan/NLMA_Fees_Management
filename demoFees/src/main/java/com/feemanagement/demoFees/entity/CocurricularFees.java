package com.feemanagement.demoFees.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "Cocurricular_Fees")

public class CocurricularFees {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long billNumber;
    private String academicYear;
    private LocalDate dateOfBillng;


    private String studentId;
    private String studentName;
    private String currentClass;

    private String coCurricularCourse;
    //private Double annualTransportFee;//whats this?
    private String paymentFrequency;
    private Double feeRecieved;
    private String paymentMode;

    //Admin entry
    private Boolean feeReduction;
    private Double amountReduced;
    private String adminRemarks;
}
