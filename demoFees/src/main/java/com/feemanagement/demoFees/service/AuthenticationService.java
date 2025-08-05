package com.feemanagement.demoFees.service;

import com.feemanagement.demoFees.DTO.AuthenticationResponseDTO;
import com.feemanagement.demoFees.entity.User;
import com.feemanagement.demoFees.repository.AuthenticationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationService {
    @Autowired
    private AuthenticationRepository authenticationRepository;

    public ResponseEntity<User> createUserLogin(User user) {
        User savedUser = authenticationRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }


    public ResponseEntity<AuthenticationResponseDTO> validateUser(String name, String password) {
//prompt for specific scenarios -TBH later
        Optional<User> fetchedUser = authenticationRepository.findByUserNameAndPassword(name, password);
        AuthenticationResponseDTO authenticationResponseDTO;
        System.out.println(fetchedUser);
        if (fetchedUser.isEmpty()) {
            authenticationResponseDTO = new AuthenticationResponseDTO(false, "User does not exists/Invalid Credentials");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(authenticationResponseDTO);
        } else {
            authenticationResponseDTO = new AuthenticationResponseDTO(true, "Login Successful");
            return ResponseEntity.ok(authenticationResponseDTO);
        }
    }
}


