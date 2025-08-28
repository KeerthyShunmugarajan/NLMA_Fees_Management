import React, { useEffect, useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, TextField, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import './StudentRegistrationForm.css';
import { data, useParams } from "react-router-dom";
import { fetchStudentbyId } from "../../service/ListStudentDetailsService";
import { Student } from "../../models/student.model";


const StudentRegistrationForm = () => {
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState<Student | null>(null);
  console.log("id from URL:" + id);

  useEffect(() => {
    if (id) {
      const loadStudentbyId = async () => {
        const studentbyID = await fetchStudentbyId(id);
        console.log(studentbyID);
        setFormData(studentbyID);
      };
      loadStudentbyId();
    };

  }, [id]);
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
      {/* Office Details */}
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography align="center" >Office Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <TextField label="Application Number" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <TextField id="studentId" label="Student ID" variant="outlined" size="small" fullWidth disabled value={formData?.studentId} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <TextField label="Date of Joining" fullWidth type="date" InputLabelProps={{ shrink: true }} variant="outlined" size="small" />
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
              <TextField label="First Name" variant="outlined" size="small" fullWidth InputLabelProps={{ shrink: true }} value={formData?.name} />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <TextField label="Last Name" variant="outlined" size="small" fullWidth InputLabelProps={{ shrink: true }} value={formData?.name} />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <TextField label="Date of Birth" type="date" InputLabelProps={{ shrink: true }} variant="outlined" size="small" fullWidth />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend" sx={{ fontSize: "0.9rem", mb: 0.5, typography: "body2" }} >Gender</FormLabel>
                <RadioGroup row>
                  <FormControlLabel value="Male" control={<Radio size="small" />} label="Male" />
                  <FormControlLabel value="Female" control={<Radio size="small" />} label="Female" />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel id="class-select-label">Class</InputLabel>
                <Select labelId="class-select-label" defaultValue="">
                  <MenuItem value=""><em>Select Class</em></MenuItem>
                  {/* Add more MenuItems as needed */}
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
              <TextField label="Town" variant="outlined" size="small" />

            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <TextField label="State" variant="outlined" size="small" />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <TextField label="Pincode" variant="outlined" size="small" />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <TextField label="Student Contact number" variant="outlined" size="small" />
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

      {/* Right Panel */}
      <div>
        <div className="form-actions">
          <button>Add</button>
          <button>Reset</button>
        </div>
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