package com.feemanagement.demoFees.controller;

import com.feemanagement.demoFees.DTO.AuthenticationResponseDTO;
import com.feemanagement.demoFees.DTO.UserCredentialDTO;
import com.feemanagement.demoFees.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4000", allowedHeaders = "*")
@RestController
public class AuthenticationController {
    @Autowired
    private AuthenticationService authenticationService;

//    private static final Map<String, UserRecord> USERS = new HashMap<>();
//
//    static {
//        USERS.put("Senthil", new UserRecord("Senthil_Admin", "Admin"));
//        USERS.put("User_2", new UserRecord("User_2", "Accountant"));
//        USERS.put("User_3", new UserRecord("User_3", "Viewer"));
//    }



    @PostMapping("/auth/authenticate-user")
    public ResponseEntity<AuthenticationResponseDTO> login(@RequestBody UserCredentialDTO userLoginDTO) {

        //LOGIC TO check authentication
        return authenticationService.validateUser(userLoginDTO.getUserName(),userLoginDTO.getPassword());
    }


//    //class to set password and role
//    static class UserRecord {
//        String password;
//        String role;
//
//        UserRecord(String password, String role) {
//            this.password = password;
//            this.role = role;
//        }
//    }
}
