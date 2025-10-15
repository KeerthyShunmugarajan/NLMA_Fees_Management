import React, { useEffect, useState } from "react";
import { StudentDetailsResponse } from "../../models/studentDetails.models";
import { useNavigate } from "react-router-dom";
import './studentDetails.css';
import fetchStudentsPaginated from "../../service/ListStudentDetailsService";

const StudentDetailsForm = () => {
    const [studentDetails, setStudentDetails] = useState<StudentDetailsResponse[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [selectedClass, setSelectedClass] = useState<string>("");

    const pageSize = 10;
    const navigate = useNavigate();

    // Column definitions (dynamic headers)
    const columns = [
        { key: "studentId", label: "Student ID" },
        { key: "name", label: "Name" },
        { key: "grade", label: "Grade", filter: true },
        { key: "contactNumber", label: "Contact" },
        { key: "email", label: "Email" },
        { key: "admissionDate", label: "Admission Date" },
        { key: "actions", label: "Actions" }
    ];

    // Load students from backend
    const loadStudents = async (page: number, studentClass?: string) => {
        const data = await fetchStudentsPaginated(page, pageSize,selectedClass);
        setStudentDetails(data.students || []);
        setCurrentPage(data.currentPage || 0);
        setTotalPages(data.totalPages || 0);
    };

    useEffect(() => {
        loadStudents(0, selectedClass);
    }, [selectedClass]);

    // Pagination handlers
    const handleNext = () => {
        if (currentPage + 1 < totalPages) loadStudents(currentPage + 1, selectedClass);
    };

    const handlePrev = () => {
        if (currentPage > 0) loadStudents(currentPage - 1, selectedClass);
    };

    // Update / Delete handlers
    const handleUpdate = (id: string) => navigate(`/students/${id}/edit`);
    const handleDelete = (id: string) => console.log("Delete student Id:", id);

    return (
        <div  className="table-wrapper">
            <h2>Student Details</h2>
            <table className="table-container" border={1} cellPadding={8}>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th key={col.key}>
                                {col.label}
                                {col.filter && col.key === "grade" && (
                                    <select
                                        value={selectedClass}
                                        onChange={(e) => setSelectedClass(e.target.value)}
                                        style={{ marginLeft: "5px" }}
                                    >
                                        <option value="">All</option>
                                        <option value="LKG">LKG</option>
                                        <option value="UKG">UKG</option>
                                        <option value="I">I</option>
                                        <option value="II">II</option>
                                        <option value="III">III</option>
                                        <option value="IV">IV</option>
                                        <option value="V">V</option>
                                        <option value="VI">VI</option>
                                        <option value="VII">VII</option>
                                        <option value="VIII">VIII</option>
                                        <option value="IX">IX</option>
                                        <option value="X">X</option>
                                    </select>
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {studentDetails.length > 0 ? (
                        studentDetails.map((s) => (
                            <tr key={s.studentId}>
                                {columns.map((col) => (
                                    <td key={col.key}>
                                        {col.key === "actions" ? (
                                            <>
                                                <button onClick={() => handleUpdate(s.studentId)} className="btn-primary">Update</button>
                                                <button onClick={() => handleDelete(s.studentId)} className="btn-danger" style={{ marginLeft: "10px" }}>Delete</button>
                                            </>
                                        ) : (
                                            s[col.key as keyof StudentDetailsResponse]
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length} style={{ textAlign: "center" }}>No Records Found</td>
                        </tr>
                    )}
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
