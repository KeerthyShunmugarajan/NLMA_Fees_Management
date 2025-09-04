package com.feemanagement.demoFees.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.boot.autoconfigure.web.WebProperties;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name="DELETED_STUDENTS")
public class DeletedStudents {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long deletedId;

    private String studentId;
    private String name;
    private String email;
    private String grade;
    private String section;
    private int rollNo;
    private String contactNumber;
    //private LocalDate deletedAt;
    private String reason = "reason to be filled later";
}
