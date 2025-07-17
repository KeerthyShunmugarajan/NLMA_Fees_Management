package com.feemanagement.demoFees.service;

import com.feemanagement.demoFees.DTO.UserLoginDTO;
import com.feemanagement.demoFees.entity.UserLogin;
import com.feemanagement.demoFees.repository.UserLoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserLoginService {
    @Autowired
    private UserLoginRepository userLoginRepository;

public ResponseEntity<UserLogin> createUserLogin(UserLogin userLogin){
    UserLogin saverUser = userLoginRepository.save(userLogin);
    return ResponseEntity.ok(saverUser);
}


    public ResponseEntity<String> ValidateUser(String name, String password){

    String roleAssigned = userLoginRepository.findByUserNameAndPassword(name,password)
            .map(UserLogin::getRole).orElse("false");
        if ("false".equals(roleAssigned)) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        } else {
            return ResponseEntity.ok("Login successful. Role: " + roleAssigned);
        }
    }
}
