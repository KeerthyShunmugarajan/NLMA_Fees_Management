package com.feemanagement.demoFees.controller;

import com.feemanagement.demoFees.DTO.IDGenerateDTO;
import com.feemanagement.demoFees.DTO.NewStudentDTO;
import com.feemanagement.demoFees.DTO.StudentUpdateDTO;
import com.feemanagement.demoFees.DTO.StudentViewDTO;
import com.feemanagement.demoFees.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4000",allowedHeaders = "*")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/login")
    public String loginPage() {
        return "Welcome to Login Page !";
    }

    //call studentService to create student data and enter into db
   /* @PostMapping("/")
    //public ResponseEntity<Student> createStudentDataController(@Valid @RequestBody Student student) {
    public ResponseEntity<Map<String,String >> createStudentDataController(@Valid @RequestBody Student student) {
       *//* Student saveData = studentService.createStudentData(student);
        return ResponseEntity.ok(saveData);*//*
        return  studentService.createStudentData(student);
    }*/

    @PostMapping("/students")
    public ResponseEntity<Map<String,String >> createStudentDataController(@Valid @RequestBody NewStudentDTO newstudentdto) {
        return  studentService.createStudentData(newstudentdto);
    }

    //Get ALL Student DAta
    @GetMapping("/students")
    public ResponseEntity<?> getAllStudentsData() {
        return studentService.getStudentData();
    }

    @GetMapping("/students/newid")
    public ResponseEntity<IDGenerateDTO> generateStudentID(){
        IDGenerateDTO response =studentService.generateStudentId();
        //System.out.println((newId));
        return  ResponseEntity.ok(response);
    }

    //Get student data by ID
    @GetMapping("/students/{id}")
    public StudentViewDTO getStudentDataByIdController(@PathVariable("id") String id) {
        return studentService.getStudentDataById(id);
    }


    //update StudentData by passingID
    @PutMapping("/students/{id}")
    public ResponseEntity<Map<String,Object>> updateStudentData(@PathVariable("id") String id, @Valid @RequestBody StudentUpdateDTO studentUpdateDTO) {
        return studentService.updateStudentData(id, studentUpdateDTO);
    }

    //Delete Student data by ID
    @DeleteMapping("/students/{id}")
    public ResponseEntity<Map<String,String>> deleteStudentById(@PathVariable("id") String id,@RequestParam(required = false) String reason) {
        return studentService.deleteStudentRecordByID(id,reason);
    }
}
