import React, { useState } from "react";
import "./stepper.css";

const Stepper = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const handleContinue = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  console.log(currentStep);
  return (
    <div className="stepper">
      <div>
        {steps.map(({ label, content }, index) => (
          <div key={label} className="stepper-container">
            <div className={`step-number ${index <= currentStep ? "active" : ""}`}>
              {index + 1}
              {index < steps.length - 1 && <div className={`step-line ${index <= currentStep ? "active" : ""}`}></div>}
            </div>
            <div className="step-label">{label}</div>
          </div>
        ))}
      </div>

      <div className="step-content">{steps[currentStep].content}</div>
      <div className="step-controls">
        <button onClick={handleBack}>back</button>
        <button onClick={handleContinue}>continue</button>
      </div>
    </div>
  );
};

export default Stepper;
