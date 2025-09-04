import React, { useEffect, useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, TextField, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import './StudentRegistrationForm.css';
import { useParams } from "react-router-dom";
import { fetchStudentbyId, fetchStudentId } from "../../service/ListStudentDetailsService";
import { Student } from "../../models/student.model";
import { IdGeneration } from "../../models/idGeneration.models";
import gradesJSON from "./grades.json"


const StudentRegistrationForm = () => {
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<Student | null>({
    studentId: "", name: "", grade: "", contactNumber: "", email: "",
    admissionDate: "", gender: "",registrationDate:new Date().toLocaleDateString()
  });
  const [newStudentRec, setNewStudentRec] = useState<IdGeneration | null>(null);
  console.log("id from URL:" + id);

  // const [formData, setFormData] = useState<Student|null>({
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
  // });



  useEffect(() => {
    if (id) {
      const loadStudentbyId = async () => {
        const studentbyID = await fetchStudentbyId(id);
        console.log(studentbyID);
        setFormData(studentbyID);
      };
      loadStudentbyId();
    }
    else {
      const loadStudentId = async () => {
        const studentId = await fetchStudentId();
        console.log(studentId);
        console.log("return:", { studentId });
        setNewStudentRec(studentId);

      };
      loadStudentId();
    };

  }, [id]);
  //generic input change handler:
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  //form submittion
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submitting data:", formData);

    // call your backend API ?????
  };

  return (
    <div className="stu-form-container">
      <h2>{id ? "Update Student Record" : "New Student Registration"}</h2>

      {/* <img
        src="https://cdn-icons-png.flaticon.com/512/3305/3305803.png"
        alt="Student Illustration"
      /> */}
      {/* <Typography variant="h4" align="center" gutterBottom>
        {id?"Update Student Details":"Student Registration Form"}
      </Typography> */}

      <form onSubmit={handleSubmit}>
        {/* Office Details */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography align="center" >Office Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Application Number" name="appNumber" variant="outlined" size="small" fullWidth disabled value={id ? formData?.studentId : newStudentRec?.appNumber} InputLabelProps={{ shrink: true }} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField id="studentId" label="Student ID" name="studentId" variant="outlined" size="small" fullWidth disabled value={id ? formData?.studentId : newStudentRec?.studentID} InputLabelProps={{ shrink: true }} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField name="admissionDate" label="Date of Joining" fullWidth type="date" InputLabelProps={{ shrink: true }} variant="outlined" size="small" value={formData?.admissionDate} onChange={handleChange} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Registration Date" fullWidth disabled value={new Date().toLocaleDateString()} variant="outlined" size="small" />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>


        {/* Student Details */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Student Details</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Grid container spacing={2}>
              {/* Name: First & Last */}
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="First Name" name="name" variant="outlined" size="small" fullWidth InputLabelProps={{ shrink: true }} value={formData?.name} onChange={handleChange} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Last Name" variant="outlined" size="small" fullWidth InputLabelProps={{ shrink: true }} value="nothing for now" />
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Date of Birth" type="date" InputLabelProps={{ shrink: true }} variant="outlined" size="small" fullWidth onChange={handleChange} />
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <FormControl component="fieldset" fullWidth>
                  <FormLabel component="legend" sx={{ fontSize: "0.9rem", mb: 0.5, typography: "body2" }} >Gender</FormLabel>
                  <RadioGroup name="gender" value={formData?.gender} onChange={handleChange} row>
                    <FormControlLabel value="Male" control={<Radio size="small" />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio size="small" />} label="Female" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <FormControl variant="outlined" size="small" fullWidth >
                  <InputLabel id="class-select-label">Select Grade</InputLabel>
                  <Select name="grade" labelId="class-select-label" label="Select Grade" value={formData?.grade || ""} onChange={handleSelectChange}>
                    {gradesJSON.grades.map((grade) => (
                      <MenuItem key={grade.id} value={grade.name}>
                        {grade.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }} >
                <TextField label="Nationality" variant="outlined" size="small" fullWidth />
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Religion" variant="outlined" size="small" fullWidth />
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Caste" variant="outlined" size="small" fullWidth />
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Aadhar No" variant="outlined" size="small" fullWidth />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>

        {/* Contact Details */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <legend>Contact Details</legend>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Address Line 1" variant="outlined" size="small" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Address Line 2" variant="outlined" size="small" />

              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Town" name="town" variant="outlined" size="small" />

              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="State" name="state" variant="outlined" size="small" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Pincode" name="pincode" variant="outlined" size="small" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Student Contact number" name="contactNumber" variant="outlined" size="small" value={formData?.contactNumber} onChange={handleChange} />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="E-mail" name="email" variant="outlined" size="small" value={formData?.email} onChange={handleChange} />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        {/*Parent's Details */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <legend>Parent Details</legend>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Father Name" variant="outlined" size="small" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Father's Occupation" variant="outlined" size="small" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Father's Highest Education" variant="outlined" size="small" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Father's Contact" variant="outlined" size="small" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Mother's Name" variant="outlined" size="small" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Mother's Occupation" variant="outlined" size="small" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Mother's Highest Education" variant="outlined" size="small" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Mother's Contact" variant="outlined" size="small" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Guardian's Name (If applicable)" variant="outlined" size="small" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Guardian's Occupation" variant="outlined" size="small" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Guardian's contact" variant="outlined" size="small" />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        {/*Additional Information*/}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <legend>Additional Information</legend>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Prev. School if any" fullWidth variant="outlined" size="small" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Specific Areas of Interest" fullWidth variant="outlined" size="small" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="How did you know about NLMA?" fullWidth variant="outlined" size="small" />
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <TextField label="Comments" fullWidth variant="outlined" size="small" />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        <div className="form-actions">
          <button>Add</button>
          <button>Reset</button>
        </div>
      </form>
      {/* Right Panel */}
      <div>

        <div className="update-panel">
          <p>Update Student Record</p>
          <label><input type="radio" name="update" /> Yes</label>
          <label><input type="radio" name="update" /> No</label>
          <input type="text" placeholder="Enter Student ID" />
          <button>Go</button>
          <button>Update</button>
        </div>
        <button>Close</button>
      </div>
    </div>
  );
};
export default StudentRegistrationForm;

