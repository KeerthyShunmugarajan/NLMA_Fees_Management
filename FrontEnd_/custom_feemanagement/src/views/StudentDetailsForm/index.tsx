import React, { useEffect, useState } from "react";
import { StudentDetailsResponse } from "../../models/student.models";
import fetchStudents from "../../service/ListStudentDetailsService";
import { useNavigate } from "react-router-dom";

const StudentDetailsForm =()=>{
const [studentDetails,setStudentDetails]=useState<StudentDetailsResponse[]>([]);//this array will alwas contain array of type Studentdetailsresponse
useEffect(()=>{
    const loadStudents = async()=>{
        const studentData = await fetchStudents();  
        setStudentDetails(studentData);
    };
loadStudents();
},[]);
const navigate=useNavigate();
const handleUpdate=(id:string)=>{
    console.log("Update student Id :",id);
    navigate('/$id');
}

const handleDelete=(id:string)=>{
    console.log("Enter student Id to delete:",id);
}
    return(
      <div>
      <h2>Student Details</h2>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Grade</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Admission Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentDetails.map((s) => (
            <tr key={s.studentId}>
              <td>{s.studentId}</td>
              <td>{s.name}</td>
              <td>{s.grade}</td>
              <td>{s.contactNumber}</td>
              <td>{s.email}</td>
              <td>{s.admissionDate}</td>
              <td>
                <button onClick={()=>handleUpdate(s.studentId)}>Update</button>
                <button style={{ marginLeft: "10px" }} onClick={()=>handleDelete(s.studentId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetailsForm;