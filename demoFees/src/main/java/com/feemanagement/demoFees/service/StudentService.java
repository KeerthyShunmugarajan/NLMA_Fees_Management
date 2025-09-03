package com.feemanagement.demoFees.service;

import com.feemanagement.demoFees.DTO.IDGenerateDTO;
import com.feemanagement.demoFees.DTO.NewStudentDTO;
import com.feemanagement.demoFees.DTO.StudentUpdateDTO;
import com.feemanagement.demoFees.DTO.StudentViewDTO;
import com.feemanagement.demoFees.Mapper.StudentMapper;
import com.feemanagement.demoFees.entity.DeletedStudents;
import com.feemanagement.demoFees.entity.Student;
import com.feemanagement.demoFees.exceptions.StudentDoesNotExistsException;
import com.feemanagement.demoFees.repository.DeletedStudentRepository;
import com.feemanagement.demoFees.repository.StudentRepository;
import jakarta.validation.constraints.NotNull;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private DeletedStudentRepository deletedStudentRepository;

@Autowired
private StudentMapper studentMapper;

    //create students
    public ResponseEntity<Map<String, String>> createStudentData(NewStudentDTO newstudentdto) {
        Student student = studentMapper.mapToStudentEntity(newstudentdto);
        String newStudentId = generateStudentId().getStudentID();
        System.out.println("New ID Generated =" +newStudentId);
        student.setStudentId(newStudentId);
        Student studentData = studentRepository.save(student);

        studentRepository.save(studentData);

        Map<String,String> response = new HashMap<>();
        response.put("Message","New Student record created");
        response.put("ID",studentData.getStudentId());
        return ResponseEntity.ok(response);
    }

    public IDGenerateDTO generateStudentId() {
        String schoolCode = "NLMA";
        String year = String.valueOf(LocalDate.now().getYear());
        Long latestAppNum = studentRepository.getLatestAppNumber().orElse(0L)+1;
        Long appNumIncrement = 10000 + latestAppNum;
        String newStudentId = schoolCode.concat(String.valueOf(appNumIncrement)).concat(year);
        return new IDGenerateDTO(newStudentId,latestAppNum);
    }

   //Fetch all students record
    public ResponseEntity<?> getStudentData(){
        List<Student> students = studentRepository.findAll();
        if(students.isEmpty()){
            Map<String,String> response = new HashMap<>();
            response.put("message","No Records Found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
         }
        else {
            return ResponseEntity.ok(students);
        }
    }

    public StudentViewDTO getStudentDataById(String id) {
        StudentViewDTO studentViewDTO = studentMapper.mapToStudentViewDTO(studentRepository.findStudentDataById(id).orElseThrow(() ->
                new StudentDoesNotExistsException("Student with Id " + id + " does not exists")));
        return studentViewDTO;

    }

    //update students by id
    public ResponseEntity<Map<String,Object>> updateStudentData(String id, @NotNull StudentUpdateDTO updatedStudent) {

        Student oldStudentData = studentRepository.findStudentDataById(id).orElseThrow(() ->
                new StudentDoesNotExistsException("Student with Id " + id + " does not exists"));


        oldStudentData.setName(updatedStudent.getName());
        oldStudentData.setEmail(updatedStudent.getEmail());
        oldStudentData.setContactNumber(updatedStudent.getContactNumber());
        Student updated = studentRepository.save(oldStudentData);

        StudentUpdateDTO studentUpdateDTO = studentMapper.mapToStudentUpdateDTO(updated);

        Map<String,Object> response = new HashMap<>();
        response.put("message","Student record updated");
        response.put("student",studentUpdateDTO);
        return ResponseEntity.ok(response);

        // HOW TO ADD MAPPER UTILS
    }


    //delete the students and move to another table
    public ResponseEntity<Map<String,String>> deleteStudentRecordByID(String id,String reason){
        Student studentRec = studentRepository.findStudentDataById(id).orElseThrow(
                ()->new StudentDoesNotExistsException("Student with id "+id+" does not exists."));
        DeletedStudents deletedStudentData = new DeletedStudents();

        deletedStudentData.setStudentId(studentRec.getStudentId());
        deletedStudentData.setName(studentRec.getName());
        deletedStudentData.setEmail(studentRec.getEmail());
        deletedStudentData.setGrade(studentRec.getGrade());
        deletedStudentData.setSection(studentRec.getSection());
        deletedStudentData.setContactNumber(studentRec.getContactNumber());
        deletedStudentData.setRollNo(studentRec.getRollNo());
        //deletedStudentData.setDeletedAt(LocalDate.now());

        deletedStudentData.setReason(reason != null ? reason : "No reason provided");
        //deletedStudentData.setReason("No reason provided");
        deletedStudentRepository.save(deletedStudentData);
        //studentRepository.delete(studentRec);
        studentRepository.delete(studentRec);

        Map<String,String> response = new HashMap<>();
        response.put("message","Student deleted and archived successfully");
        return ResponseEntity.ok(response);

    }

}