package com.feemanagement.demoFees.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;


@Entity
@Data
@Table(name="TabList")
public class TabList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="tab_key",nullable = false,unique = true)
    private String key;

    private String name;
    private String component;

    @Column(name="order_no")
    private Integer order;

    @ManyToMany
    @JoinTable(
            name="tab_roles",
            joinColumns = @JoinColumn(name="tab_id"),
            inverseJoinColumns =@JoinColumn(name = "role_id")
    )
    private List<RolesList> roles;

    @OneToMany(mappedBy = "parentTab",cascade = CascadeType.ALL)
    private List<ChildTabsList> childTabs;
}
