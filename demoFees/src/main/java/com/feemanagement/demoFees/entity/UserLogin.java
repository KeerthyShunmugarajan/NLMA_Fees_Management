package com.feemanagement.demoFees.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "LOGIN_DETAILS")
public class UserLogin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String userName;
    private String password;
    private String email;
    private String role;

    //Getter and Setter Methods


}
