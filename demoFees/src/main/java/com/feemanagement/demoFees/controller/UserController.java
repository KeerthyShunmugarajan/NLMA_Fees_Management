package com.feemanagement.demoFees.controller;

import com.feemanagement.demoFees.entity.User;
import com.feemanagement.demoFees.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private AuthenticationService userLoginService;

    @PostMapping("/user")
    public ResponseEntity<User> createUserLoginAccount(@RequestBody User userDTO) {
        //change to User only
        return (userLoginService.createUserLogin(userDTO));
    }
}
