package com.feemanagement.demoFees.controller;

import com.feemanagement.demoFees.DTO.UserLoginDTO;
import com.feemanagement.demoFees.entity.UserLogin;
import com.feemanagement.demoFees.service.StudentService;
import com.feemanagement.demoFees.service.UserLoginService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class UserLoginController {
    @Autowired
    private UserLoginService userLoginService;

    private static final Map<String, UserRecord> USERS = new HashMap<>();

    static {
        USERS.put("Senthil", new UserRecord("Senthil_Admin", "Admin"));
        USERS.put("User_2", new UserRecord("User_2", "Accountant"));
        USERS.put("User_3", new UserRecord("User_3", "Viewer"));
    }

    @PostMapping("/Auth")
public ResponseEntity<UserLogin> createUserLoginAccount(@RequestBody UserLogin login){
     return( userLoginService.createUserLogin(login));

}

    @GetMapping("/Auth/{name}/{password}")
    public ResponseEntity<String> login(@PathVariable("name") String userName,
                                   @PathVariable("password") String password) {

        //LOGIC TO check authentication
        return userLoginService.ValidateUser(userName,password);
    }


    //class to set password and role
    static class UserRecord {
        String password;
        String role;

        UserRecord(String password, String role) {
            this.password = password;
            this.role = role;
        }
    }
}
