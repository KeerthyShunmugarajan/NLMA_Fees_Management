import axios from "axios";
import { StudentDetailsResponse } from "../../models/studentDetails.models";
import { Student } from "../../models/student.model";

const fetchStudents =async ():Promise<StudentDetailsResponse[]> => {
     const url =`${process.env.BASE_URL}${process.env.STUDENTDETAILS_ENDPOINT}`;
      
    try{
        const response = await axios.get(url);;
        return response.data;
    }
    catch(error){
        console.error("Error fetching student details",error);
        return[];
    }
};

export const fetchStudentbyId=async(id:string):Promise<Student|null>=>{
    const url=`${process.env.BASE_URL}${process.env.STUDENTDETAILS_ENDPOINT}/${id}`;
    try{
        const response = await axios.get(url);
        return response.data;
    }
    catch(error){
        console.error("Error fetching student details for id",error);
        return null;
    }
}
export default fetchStudents;