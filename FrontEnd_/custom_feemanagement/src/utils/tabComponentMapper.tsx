import React from "react"
import StudentRegistrationForm from "../views/StudentRegistrationForm"
import StudentDetailsForm from "../views/StudentDetailsForm"
//new forms placeholder
const FeeManagementForm = () =>{
    return (<h2>Fee Module child component</h2>);
};

const TransportFeeForm = ()=>{
return (<h2>Transport Form in progress</h2>);
};

export const TAB_COMPONENT_MAPPER:{[x:string]:React.FC}={
    studentRegistration: StudentRegistrationForm,
    studentDetails:StudentDetailsForm,
    feeEntry:FeeManagementForm,
    transportEntry:TransportFeeForm,
    
}