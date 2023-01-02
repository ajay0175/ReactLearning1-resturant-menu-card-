import React, {useReducer} from "react";
import "./style.css";

const reducer = (state, action) => {
    if(action.type === "INCR") {
        state = state + 1;
    }

    if(action.type === "DECR") {
        if(state <= 0){
            return 0;
        }
        state = state - 1;
    }

    return state;
}

const UseReducer = () => {
    const intialVal = 15;    
    // console.log(Mynum);
    // console.log(setMynum);

    const [state, dispatch] = useReducer(reducer, intialVal);

  return (
    <>
        <div className="center_div">
            <p>{state}</p>
            <div className="button2" onClick={() => dispatch({type:"INCR"})}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
            </div>
            <div className="button2" onClick={() => dispatch({type:"DECR"})}>
                <span></span>   
                <span></span>
                <span></span>
                <span></span>
                DECR
            </div>
        </div>
    </>
  );
};

export default UseReducer;
