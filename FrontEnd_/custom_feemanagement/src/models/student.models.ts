export interface StudentDetailsResponse {
    studentId: string;
    name: string;
    grade: number;
    contactNumber: string;
    email: string;
    //can be converted to localdate before rendering
    admissionDate: string;

}