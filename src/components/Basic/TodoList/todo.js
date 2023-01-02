import React, { useState, useEffect } from "react";
import "./style.css";

const getLocationData = () => {
    const lists = localStorage.getItem("myTodoList");
    
    if(lists) {
        return JSON.parse(lists);
    } else {
        return [];
    }
}

const Todo = () => {
    const [inputdata, setinputData] = useState("");
    const [items, setItems] = useState(getLocationData());
    const [isEditedItem, setIsEditedItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);

    const addItem = () => {
        if(!inputdata) {
            alert('add the data');
        } 
        else if(inputdata && toggleButton) {
            setItems(
                items.map((currElem) => {
                    if(currElem.id === isEditedItem){
                        return{...currElem, name: inputdata};
                    }
                    return currElem;
                })
            );

            setinputData("");
            setIsEditedItem(null);
            setToggleButton(false);
        }
        else {
            const myNewData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            };
            setItems([...items, myNewData]);
            setinputData("");
        }
    };

    // Delete items
    const deleteItem = (index) => {
        const updatedItems = items.filter((currElem) => {
            return currElem.id !== index;
        });

        setItems(updatedItems);
    };

    //Delete all items
    const removeAll = () => {
        setItems([]);
    }

    //editing the items
    const editItem = (index) => {
        const editedItem = items.find((currElem) => {
            return currElem.id === index;
        });

        setinputData(editedItem.name);
        setIsEditedItem(index);
        setToggleButton(true);
    }

    //adding local storage
    useEffect(() => {
        localStorage.setItem("myTodoList", JSON.stringify(items));
    }, [items]);

  return (
    <>
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img src="https://img.icons8.com/external-flat-circular-vectorslab/2x/external-Checklist-business-and-finance-flat-circular-vectorslab.png" alt="todologo" />
                    <figcaption>Add Your List Here 📃</figcaption>
                </figure>
                <div className="addItems">
                    <input 
                        type="text" 
                        placeholder="✍️ Add Item"
                        className="form-control"
                        value={inputdata}
                        onChange={(event) => setinputData(event.target.value)}
                    />
                    {
                        toggleButton ? (<i className="fa fa-edit add-btn" onClick={addItem}></i>) :
                        (<i className="fa fa-plus add-btn" onClick={addItem}></i>)
                    };
                </div>
                {/* Show item  */}
                <div className="showItems">
                    {
                        items.map((currElem) => {
                            return(
                                <div className="eachItem" key={currElem.id}>
                                    <h3>{currElem.name}</h3>
                                    <div className="todo-btn">
                                        <i className="fa fa-edit add-btn" 
                                        onClick={() => editItem(currElem.id)}></i>
                                        <i className="fa fa-trash-can add-btn" 
                                        onClick={() => deleteItem(currElem.id)}></i>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                {/* Remove button */}
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" 
                    onClick={removeAll}><span>Check List</span></button>
                </div>
            </div>
        </div>
    </>
  );
};

export default Todo;
