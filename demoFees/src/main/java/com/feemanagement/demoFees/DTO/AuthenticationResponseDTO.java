package com.feemanagement.demoFees.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponseDTO {

    private Boolean isAuthenticUser;
    private String message;

}
