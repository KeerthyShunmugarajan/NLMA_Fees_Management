package com.feemanagement.demoFees.DTO;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class StudentViewDTO {

    //private Long appNumber;
    private String studentId;
    private String name;
    //private int rollNo;
    private String grade;
    //private String section;
    private String contactNumber;
    private String email;
    private LocalDate admissionDate;
}
