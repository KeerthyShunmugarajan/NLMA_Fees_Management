package com.feemanagement.demoFees.DTO;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class FeesDTO {
    //NEED TO ADD VALIDATIONS
    //@Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    //private Long billNumber;
    private String academicYear;
    private LocalDate dateOfBillng;
    private String currentClass;

    private String studentId;
    private String studentName;
    private String paymentFrequency;
    private BigDecimal feeRecieved;
    private BigDecimal annualFee;
    private String paymentMode;
    private Boolean feeReduction;
    private BigDecimal amountReduced;
    private String adminRemarks;
    //private String feeType;//"Tuition", "Library","Transport","Co-curricular"
    private String status; // "PAID", "UNPAID","PENDING"
    private LocalDate dueDate;
    private LocalDate paidDate;

}
