import React from "react";
// import Resturant from "./components/Basic/Resturant";
// import UseState from "./components/Basic/Hooks/useState";
// import UseEffect from "./components/Basic/Hooks/useEffect";
// import UseReducer from "./components/Basic/Hooks/useReducer";
// import Todo from "./components/Basic/TodoList/todo";
// import Otp from "./components/Basic/OTP/Otp";
import step from "./components/Basic/React stepper/stepperData";
import Stepper from "./components/Basic/React stepper/Stepper";


const App = () => {
  return <>
    <Stepper steps={step} />
  </>;
};

export default App;
