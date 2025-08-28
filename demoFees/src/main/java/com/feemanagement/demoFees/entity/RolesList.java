package com.feemanagement.demoFees.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="RolesList")
public class RolesList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="role_name",nullable = false,unique = true)
    private String roleName;
}
