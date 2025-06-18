package com.feemanagement.demoFees.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class TransportationFeesDTO {

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
