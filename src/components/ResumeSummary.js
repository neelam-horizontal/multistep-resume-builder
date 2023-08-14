import React from "react";

const ResumeSummary = ({ formData }) => {
  return (
    <div>
      {/* Display the summary of formData */}
      <h2>Summary</h2>
      <p>Full Name: {`${formData.firstName} ${formData.lastName}`}</p>
      <p>City: {formData.city}</p>
      <p>Phone Number: {formData.phoneNumber}</p>
      <p>Email: {formData.email}</p>
      <p>School: {formData.school}</p>
      <p>SSC/HSC Percentage: {formData.sscHscPercentage}</p>
      <p>Highest Degree: {formData.highestDegree}</p>
      <p>Company: {formData.company1}</p>
      <p>Position: {formData.position1}</p>
      <p>Experience: {formData.experience}</p>
      <p>Specialization: {formData.specialization}</p>
      <p>Hobbies: {formData.hobbies}</p>
    </div>
  );
};

export default ResumeSummary;
