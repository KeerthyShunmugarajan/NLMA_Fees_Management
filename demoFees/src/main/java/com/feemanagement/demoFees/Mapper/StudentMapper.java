package com.feemanagement.demoFees.Mapper;

import com.feemanagement.demoFees.DTO.NewStudentDTO;
import com.feemanagement.demoFees.DTO.StudentUpdateDTO;
import com.feemanagement.demoFees.DTO.StudentViewDTO;
import com.feemanagement.demoFees.entity.Student;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class StudentMapper {

    public static StudentViewDTO mapToStudentViewDTO(Student student) {
        StudentViewDTO studentViewDTO = new StudentViewDTO();
        studentViewDTO.setAppNumber(student.getAppNumber());
        studentViewDTO.setStudentId(student.getStudentId());
        studentViewDTO.setName(student.getName());
        studentViewDTO.setContactNumber(student.getContactNumber());
        studentViewDTO.setEmail(student.getEmail());
        studentViewDTO.setAdmissionDate(student.getAdmissionDate());
        return studentViewDTO;
    }

    //MAPPING TO UPDATES
    public static StudentUpdateDTO mapToStudentUpdateDTO(Student student) {
        StudentUpdateDTO studentUpdateDTO = new StudentUpdateDTO();

        studentUpdateDTO.setName(student.getName());
        studentUpdateDTO.setContactNumber(student.getContactNumber());
        studentUpdateDTO.setEmail(student.getEmail());
//        studentUpdateDTO.setGrade(student.getGrade());
//        studentUpdateDTO.setStudentId(student.getSection());
//        studentUpdateDTO.setRollNo(student.getRollNo());
        return studentUpdateDTO;
    }


    //MAPPING TO ORGINAL STUDENT ENTITY
    public static Student mapToStudentEntity(NewStudentDTO studentDTO) {
        Student student = new Student();
        student.setAppNumber(studentDTO.getAppNumber());
        //student.setStudentId(studentDTO.getStudentId());
        student.setName(studentDTO.getName());
        student.setRollNo(studentDTO.getRollNo());
        student.setGrade(studentDTO.getGrade());
        student.setSection(studentDTO.getSection());
        student.setContactNumber(studentDTO.getContactNumber());
        student.setEmail(studentDTO.getEmail());
        student.setAdmissionDate(LocalDate.now());
        return student;
    }


}
