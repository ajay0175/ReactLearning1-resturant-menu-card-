import React from "react";

const MenuCard = ({menuData}) => {
    // console.log(menuData);
  return (
    <>
    <section className="main-card--container">
        {menuData.map((curElem) => {
            const {id, name, catergory, image, description} = curElem;
            return (
                <>
                    <div className="card-container" key={id}>
                        <div className="card">
                            <div className="card-body">
                            <span className="card-number card-circle subtle">{id}</span>
                            <span className="card-author subtle">Breakfast</span>
                            <h2 className="card-title">{name}</h2>
                            <span className="card-discription subtle">{description}</span>
                            <div className="card-read">Read</div>
                            </div>
                            <img src={image} alt="" />
                            <span className="card-tag sublte" >Order Now</span>
                        </div>
                    </div>
                </>
            );
        })}
    </section>    
    </>
  );
};

export default MenuCard;
