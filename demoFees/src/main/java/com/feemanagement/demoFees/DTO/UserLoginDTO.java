package com.feemanagement.demoFees.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor



public class UserLoginDTO {

    private Long id;
    private String name;
    private String password;
    private String email;
    private String message;
}
