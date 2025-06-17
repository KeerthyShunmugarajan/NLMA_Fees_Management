package com.feemanagement.demoFees.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;
import org.hibernate.annotations.ColumnTransformer;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "STUDENT_DETAILS")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long appNumber;

    private String studentId;

    @NotBlank(message ="Name cannot be empty")
    @ColumnTransformer(write = "UPPER(?)")
    private String name;

    private int rollNo;
    @Column
    @Min(value = 1, message = "Grade must be at least 1")
    @Max(value = 12, message = "Grade cannot be more than 12")
    private int grade;

    private String section;

    @Pattern(regexp = "\\d{10}",message = "Please check the phone number")
    private String contactNumber;
    @Email(message = "Enter proper email format")
    private String email;
    private LocalDate admissionDate;
}

