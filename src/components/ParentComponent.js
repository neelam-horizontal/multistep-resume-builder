import React, { useState } from "react";
import Resume from "./Resume";
import ResumeSummary from "./ResumeSummary";

const ParentComponent = () => {
  const [formData, setFormData] = useState({});
  const initialFormData = {
    firstName: "",
    lastName: "",
    city: "",
    phoneNumber: "",
    email: "",
    school: "",
    sscHscPercentage: "",
    highestDegree: "",
    company1: "",
    position1: "",
    experience: "",
    specialization: "",
    hobbies: "",
  };

  const updateFormData = (updatedData) => {
    setFormData(updatedData);
  };

  return (
    <div>
      {/* Render Resume component */}
      <Resume formData={formData} updateFormData={updateFormData} />

      {/* Render ResumeSummary component */}
      <ResumeSummary formData={formData} />
    </div>
  );
};

export default ParentComponent;
