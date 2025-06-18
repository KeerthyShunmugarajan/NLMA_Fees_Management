package com.feemanagement.demoFees.service;


import com.feemanagement.demoFees.DTO.FeesDTO;
import com.feemanagement.demoFees.Mapper.FeeMapper;
import com.feemanagement.demoFees.entity.Fees;
import com.feemanagement.demoFees.entity.Student;
import com.feemanagement.demoFees.repository.FeesRepository;
import com.feemanagement.demoFees.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class FeeService {

    @Autowired
    private FeesRepository feesRepository;

    @Autowired
    StudentRepository studentRepository;

    @Autowired
    private FeeMapper feeMapper;

    //Implement -> creating a fee record if student exists in the student_details
    //public Fees createNewFeeRecord(Fees newFess){return feesRepository.save(newFess);}
    public ResponseEntity<Map<String,String>> createNewFeeRecord(FeesDTO newFeesDTO) {
        Fees newFess = feeMapper.toFeesEntity(newFeesDTO);
        Map<String,String> response = new HashMap<>();

       // return ResponseEntity.ok(response);
        String studentId = newFeesDTO.getStudentId();
        System.out.println("Finding Record for =" +studentId);
        Optional<Student> studentRec = studentRepository.findStudentDataById(studentId);
        if(studentRec.isPresent()) {
        feesRepository.save(newFess);
            response.put("Message","New Fee record created");

        }
        else{
            response.put("Message","Student does not exists.");
            //response.put("ID",studentId);
        }
        response.put("ID",studentId);
        return ResponseEntity.ok(response);
    }
}
