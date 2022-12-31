import React from "react";
import "./style.css";

const UseReducer = () => {
    // const intialVal = 15;
    const [Mynum, setMynum] = React.useState(0);
    
    // console.log(Mynum);
    // console.log(setMynum);

  return (
    <>
        <div className="center_div">
            <p>{Mynum}</p>
            <div className="button2" onClick={() => setMynum(Mynum + 1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
            </div>
            <div className="button2" onClick={() => Mynum > 0 ? setMynum(Mynum - 1) : setMynum(0)}>
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
