package com.feemanagement.demoFees.controller;

import com.feemanagement.demoFees.DTO.FeesDTO;
import com.feemanagement.demoFees.entity.Fees;
import com.feemanagement.demoFees.service.FeeService;
import com.feemanagement.demoFees.service.StudentService;
//import com.feemanagement.demoFees.model.StudentFees;
//import com.feemanagement.school.service.StudentFeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
//@RequestMapping("/Fees")
public class FeesController {
    @Autowired
    private FeeService feeService;

    @PostMapping("/fees")
    public ResponseEntity<Map<String, String>> createStudentFees(@RequestBody FeesDTO newFeeRecord) {
        return  feeService.createNewFeeRecord(newFeeRecord);
        //return newFeeRecord;
    }
 
}
