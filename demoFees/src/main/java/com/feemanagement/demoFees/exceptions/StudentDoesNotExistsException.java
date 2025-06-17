package com.feemanagement.demoFees.exceptions;

public class StudentDoesNotExistsException extends RuntimeException {
    private String errorMessage;
    public StudentDoesNotExistsException(String message) {

        super(message);
        this.errorMessage = message;
    }
}
