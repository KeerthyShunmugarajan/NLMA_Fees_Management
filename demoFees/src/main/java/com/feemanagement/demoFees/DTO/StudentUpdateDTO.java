package com.feemanagement.demoFees.DTO;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnTransformer;
import org.springframework.web.bind.annotation.GetMapping;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class StudentUpdateDTO {

    @NotBlank(message ="Name cannot be empty")
    @ColumnTransformer(write = "UPPER(?)")
    private String name;
    private String gender;
    private String grade;
    private String status;

    @Pattern(regexp = "\\d{10}",message = "Please enter the correct phone number")
    private String contactNumber;

    @Email(message = "Enter proper email format")
    private String email;
}
