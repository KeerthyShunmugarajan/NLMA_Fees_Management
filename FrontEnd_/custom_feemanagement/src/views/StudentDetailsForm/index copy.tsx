import React, { useEffect, useState } from "react";
import { StudentDetailsResponse } from "../../models/studentDetails.models";
//import fetchStudents from "../../service/ListStudentDetailsService";
import { useNavigate } from "react-router-dom";
import './studentDetails.css';
import fetchStudentsPaginated from "../../service/ListStudentDetailsService";

const StudentDetailsForm =()=>{
const [studentDetails,setStudentDetails]=useState<StudentDetailsResponse[]>([]);//this array will alwas contain array of type Studentdetailsresponse

const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const pageSize = 10;

const navigate=useNavigate();  
//useEffect(()=>{
  //  const loadStudents = async()=>{
    //    const studentData = await fetchStudents();  
      //  setStudentDetails(studentData);
    //};
//loadStudents();
//},[]);

const loadStudents = async (page: number) => {
        const data = await fetchStudentsPaginated(page, pageSize);
        setStudentDetails(data.students);
        setCurrentPage(data.currentPage);
        setTotalPages(data.totalPages);
    };

useEffect(() => {
        loadStudents(0); // load first page initially
    }, []);

    const handleNext = () => {
        if (currentPage + 1 < totalPages) {
            loadStudents(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            loadStudents(currentPage - 1);
        }
    };



const handleUpdate=(id:string)=>{
    console.log("Update student Id :",id);
   navigate(`/students/${id}/edit`);
}

const handleDelete=(id:string)=>{
    console.log("Enter student Id to delete:",id);
}
    return(
      <div>
      <h2>Student Details</h2>
      <table className="table-container" border={1} cellPadding={8}>
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
                <button onClick={()=>handleUpdate(s.studentId)} className="btn-primary">Update</button>
                <button className="btn-danger" style={{ marginLeft: "10px" }} onClick={()=>handleDelete(s.studentId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
           <div className="pagination-controls">
                <button className="btn-primary" onClick={handlePrev} disabled={currentPage === 0}>Prev</button>
                <span style={{ margin: "0 10px" }}>Page {currentPage + 1} of {totalPages}</span>
                <button className="btn-primary" onClick={handleNext} disabled={currentPage + 1 >= totalPages}>Next</button>
            </div>
      
    </div>
  );
};

export default StudentDetailsForm;