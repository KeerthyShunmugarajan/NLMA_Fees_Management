package com.feemanagement.demoFees.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Data

@Table(name = "FEE_DETAILS")
public class Fees {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long billNumber;

    //@ManyToOne
    //private Student student;
    private String academicYear;
    private LocalDate dateOfBillng;
    private String currentClass;

    private String studentId;
    private String studentName;
    private String paymentFrequency;
    private BigDecimal feeRecieved;
    private BigDecimal annualFee;
    private String paymentMode;//"CASH","ONLINE"
    private Boolean feeReduction;
    private BigDecimal amountReduced;
    private String adminRemarks;
    //private String feeType;//"Tuition", "Library","Transport","Co-curricular"
    private String status; // "PAID", "UNPAID","PENDING"
    private LocalDate dueDate;
    private LocalDate paidDate;
}
