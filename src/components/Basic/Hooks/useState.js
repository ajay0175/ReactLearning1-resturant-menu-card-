import React from "react";
import "./style.css";

const UseState = () => {
    const intialVal = 15;
    const [Mynum, setMynum] = React.useState(intialVal);
    
    console.log(Mynum);
    console.log(setMynum);

  return (
    <>
        <div className="center_div">
            <p>{Mynum}</p>
            <div class="button2" onClick={() => setMynum(Mynum + 1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Hover-Me
            </div>
            <div class="button2" onClick={() => Mynum > 0 ? setMynum(Mynum - 1) : setMynum(0)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Hover-Me
            </div>
        </div>
    </>
  );
};

export default UseState;
