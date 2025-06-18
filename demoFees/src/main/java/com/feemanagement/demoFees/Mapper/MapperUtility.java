package com.feemanagement.demoFees.Mapper;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;

@Component
public class MapperUtility {
    private ObjectMapper objectMapper = new ObjectMapper();

    public MapperUtility(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public <T> T convert(Object source, Class<T> targetClass) {
        return objectMapper.convertValue(source, targetClass);

    }
}
