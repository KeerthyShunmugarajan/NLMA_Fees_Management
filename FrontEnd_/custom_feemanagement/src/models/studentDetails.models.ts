export interface StudentDetailsResponse {
    studentId: string;
    name: string;
    grade: string;
    contactNumber: string;
    email: string;
    //can be converted to localdate before rendering
    admissionDate: string;

}