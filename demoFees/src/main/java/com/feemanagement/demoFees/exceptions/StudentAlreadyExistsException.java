package com.feemanagement.demoFees.exceptions;

public class StudentAlreadyExistsException extends RuntimeException {
    private String errorMessage;
    public StudentAlreadyExistsException(String message) {
        super(message);
        this.errorMessage = message;
    }
}
