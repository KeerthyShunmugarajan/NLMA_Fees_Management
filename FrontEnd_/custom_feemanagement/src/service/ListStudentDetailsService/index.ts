import axios from "axios";
import { StudentDetailsResponse } from "../../models/student.models";

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
export default fetchStudents;