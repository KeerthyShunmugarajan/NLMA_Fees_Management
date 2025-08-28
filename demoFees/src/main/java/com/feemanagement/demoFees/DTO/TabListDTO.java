package com.feemanagement.demoFees.DTO;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class TabListDTO {
    private Long id;
    private String key;
    private String name;
    private String component;
    private Integer order;
    private List<String> roles;     // instead of Role objects
    private List<String> childTabs; // instead of ChildTab objects
}
