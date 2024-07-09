import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const Otp = ({ otpLength = 6 }) => {
  const [otpVal, setOtpVal] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);

  console.log(otpVal);
  const handleKeyDown = (e, index) => {
    const key = e.key;

    if (key === "ArrowLeft") {
      if (index > 0) {
        ref.current[index - 1].focus();
      }

      return;
    }

    if (key === "ArrowRight") {
      if (index + 1 < otpLength) {
        ref.current[index + 1].focus();
      }
      return;
    }

    const copyOtpVal = [...otpVal];
    if (key === "Backspace") {
      copyOtpVal[index] = "";
      setOtpVal(copyOtpVal);

      if (index > 0) {
        ref.current[index - 1].focus();
      }
    }

    console.log(ref);
    if (isNaN(key)) {
      return;
    }

    if (index + 1 < otpLength) {
      ref.current[index + 1].focus();
    }

    console.log(key);
    copyOtpVal[index] = key;
    setOtpVal(copyOtpVal);
  };

  useEffect(() => {
    ref.current["0"].focus();
  }, []);

  return (
    <div className="container">
      {otpVal.map((value, index) => {
        return (
          <input
            key={index}
            ref={(currentInput) => (ref.current[index] = currentInput)}
            type="text"
            value={value}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default Otp;
