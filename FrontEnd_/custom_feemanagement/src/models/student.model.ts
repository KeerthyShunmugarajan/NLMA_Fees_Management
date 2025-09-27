export interface Student{
  studentId?: string;
  name?: string;
  grade?: string;
  contactNumber?: string;
  email?: string;
  admissionDate?: string;
  gender?:string;
  registrationDate?:string;
}


//Helper to create an empty Student
export const getEmptyStudent = (): Student => ({
  studentId: "",
  name: "",
  grade: "",
  contactNumber: "",
  email: "",
  admissionDate: "",
  gender: "",
  registrationDate: new Date().toLocaleDateString()
  // sensible defaults

  //   studentId: "",
  //   firstName: "",
  //   lastName: "",
  //   dob: "",
  //   gender: "",
  //   class: "",
  //   nationality: "",
  //   religion: "",
  //   caste: "",
  //   aadharNo: "",
  //   address1: "",
  //   address2: "",
  //   town: "",
  //   state: "",
  //   pincode: "",
  //   studentContact: "",
  //   fatherName: "",
  //   fatherOccupation: "",
  //   fatherEducation: "",
  //   fatherContact: "",
  //   motherName: "",
  //   motherOccupation: "",
  //   motherEducation: "",
  //   motherContact: "",
  //   guardianName: "",
  //   guardianOccupation: "",
  //   guardianContact: "",
  //   prevSchool: "",
  //   interests: "",
  //   referral: "",
  //   comments: ""
});