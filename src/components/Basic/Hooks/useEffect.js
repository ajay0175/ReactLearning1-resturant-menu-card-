import React, {useEffect} from "react";
import "./style.css";

const UseEffect = () => {
    // const intialVal = 15;
    const [Mynum, setMynum] = React.useState(0);
    
    useEffect(() => {
        document.title = `Chats(${Mynum})`;
    },);
    

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
        </div>
    </>
  );
};

export default UseEffect;
