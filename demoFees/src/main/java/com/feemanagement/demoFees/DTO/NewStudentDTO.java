package com.feemanagement.demoFees.DTO;

import jakarta.persistence.Column;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnTransformer;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class NewStudentDTO {

    @NotBlank(message ="Name cannot be empty")
    @ColumnTransformer(write = "UPPER(?)")
    private String name;

    private int rollNo;
    @Column
    @Min(value = 1, message = "Grade must be at least 1")
    @Max(value = 12, message = "Grade cannot be more than 12")
    private int grade;
    private String section;
    @Pattern(regexp = "\\d{10}",message = "Please enter the correct phone number")
    private String contactNumber;
    @Email(message = "Enter proper email format")
    private String email;
}
