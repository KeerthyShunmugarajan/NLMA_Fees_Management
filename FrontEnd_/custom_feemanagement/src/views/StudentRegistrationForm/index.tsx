import React from "react";

const StudentRegistrationForm=()=>{
    return (
   <div>
      <h2>Student Data</h2>
      
      {/* Office Use Section */}
      <div>
        <label>Application Number: <input type="text" /></label>
        <label>Student ID: <input type="text" disabled /></label>
        <label>Date of Joining: <input type="date" /></label>
        <label>Registration Date: <input type="text" value={new Date().toLocaleDateString()} disabled /></label>
      </div>

      {/* Student Details */}
      <fieldset>
        <legend>Student Details</legend>
        <label>Name: <input type="text" /></label>
        <label>Date of Birth: <input type="date" /></label>
        <label>Gender:
          <input type="radio" name="gender" value="Male" /> Male
          <input type="radio" name="gender" value="Female" /> Female
        </label>
        <label>Class:
          <select><option>Select Class</option></select>
        </label>
        <label>Nationality: <input type="text" /></label>
        <label>Religion: <input type="text" /></label>
        <label>Caste: <input type="text" /></label>
        <label>Aadhar No: <input type="text" /></label>
      </fieldset>

      {/* Contact Details */}
      <fieldset>
        <legend>Contact Details</legend>
        <label>Address Line 1: <input type="text" /></label>
        <label>Address Line 2: <input type="text" /></label>
        <label>Town: <input type="text" /></label>
        <label>State: <input type="text" /></label>
        <label>Pincode: <input type="text" /></label>
        <label>Student Contact No: <input type="text" /></label>
      </fieldset>

      {/* Parent's Details */}
      <fieldset>
        <legend>Parent Details</legend>
        <label>Father Name: <input type="text" /></label>
        <label>Father Occupation: <input type="text" /></label>
        <label>Father Highest Education: <input type="text" /></label>
        <label>Father Contact No: <input type="text" /></label>
        
        <label>Mother Name: <input type="text" /></label>
        <label>Mother Occupation: <input type="text" /></label>
        <label>Mother Highest Education: <input type="text" /></label>
        <label>Mother Contact No: <input type="text" /></label>

        <label>Guardian Name (if applicable): <input type="text" /></label>
        <label>Guardian Occupation: <input type="text" /></label>
        <label>Guardian Contact No: <input type="text" /></label>
      </fieldset>

      {/* Additional Info */}
      <fieldset>
        <legend>Additional Information</legend>
        <label>Previous School_if any: <input type="text" /></label>
        <label>Specific Areas of Interest: <input type="text" /></label>
        <label>How did you know about NLMA?: <input type="text" /></label>
        <label>Comments: <input type="text" /></label>
      </fieldset>

      {/* Right Panel */}
      <div>
        <div>
          <button>Add</button>
          <button>Reset</button>
        </div>
        <div>
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