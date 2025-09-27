import axios from "axios";
import { Student } from "../../models/student.model";

const createStudent = async(formData:Student):Promise<Student>=>{
    const url = `${process.env.BASE_URL}${process.env.STUDENTDETAILS_ENDPOINT}`;
    try{
        const response = await axios.post(url,formData);
        return response.data;
    }
    catch(error){
        console.log("Error while creating a student record",error);
    throw error;
    }
   
}

export default createStudent;