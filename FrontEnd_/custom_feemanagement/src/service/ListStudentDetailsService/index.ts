import axios from "axios";
import { StudentDetailsResponse } from "../../models/studentDetails.models";
import { Student } from "../../models/student.model";
import { IdGeneration } from "../../models/idGeneration.models";

const fetchStudents = async (): Promise<StudentDetailsResponse[]> => {
    const url = `${process.env.BASE_URL}${process.env.STUDENTDETAILS_ENDPOINT}`;

    try {
        const response = await axios.get(url);;
        return response.data;
    }
    catch (error) {
        console.error("Error fetching student details", error);
        return [];
    }
};

export const fetchStudentbyId = async (id: string): Promise<Student | null> => {
    const url = `${process.env.BASE_URL}${process.env.STUDENTDETAILS_ENDPOINT}/${id}`;
    try {
        const response = await axios.get(url);
        return response.data;
    }
    catch (error) {
        console.error("Error fetching student details for id", error);
        return null;
    }
}

export const fetchStudentId = async (): Promise<IdGeneration | null> => {
    // const url =`${process.env.BASE_URL}${process.env.STUDENTID_ENDPOINT}`;
    const url = `${process.env.BASE_URL}${process.env.STUDENTDETAILS_ENDPOINT}${process.env.STUDENTID_ENDPOINT}`;
    console.log(url);
    try {
        const response = await axios.get(url);
        console.log(response.data);
        console.log("Id:", response.data.studentID);
        console.log("App Num:", response.data.appNumber);
        return response.data;

    }
    catch (error) {
        console.error("Error fetching Student Id", error);
        return null;
    }


}
export default fetchStudents;