package com.feemanagement.demoFees.controller;

import com.feemanagement.demoFees.DTO.UserLoginDTO;
import com.feemanagement.demoFees.entity.UserLogin;
import org.apache.catalina.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.Map;

public class UserLoginController {

    private static final Map<String, UserRecord> USERS = new HashMap<>();

    static {
        USERS.put("Senthil", new UserRecord("Senthil_Admin", "Admin"));
        USERS.put("User_2", new UserRecord("User_2", "Accountant"));
        USERS.put("User_3", new UserRecord("User_3", "Viewer"));
    }

    @PostMapping("/Auth")
    public UserLogin login(@RequestBody UserLoginDTO login) {

        //LOGIC TO check authentication
        return null;
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
