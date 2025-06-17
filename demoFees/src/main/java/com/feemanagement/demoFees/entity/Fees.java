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
    @GeneratedValue
    private Long id;

    //@ManyToOne
    //private Student student;

    private BigDecimal amount;
    private String feeType;//"Tuition", "Library","Transport","Co-curricular"
    private LocalDate dueDate;
    private LocalDate paidDate;
    private String status; // "PAID", "UNPAID","PENDING"
    private String payMode;//"CASH","ONLINE"
}
