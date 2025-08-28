package com.feemanagement.demoFees.entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="ChildTabsList")
public class ChildTabsList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private  String childTabName;

    @Column(name="childComponent_key")
    private String childComponentKey;

    @ManyToOne
    @JoinColumn(name = "parentTab_id",nullable = false)
    private TabList parentTab;
}
