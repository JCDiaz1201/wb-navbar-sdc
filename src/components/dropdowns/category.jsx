import React from "react";

const Category = (title, logo, href) => {
    return (
        <div className="row mt-3">
            <img className="dropdown-item-icon" src={logo}/>
            <a className="col dropdown-item-sub" href={href}>{title}</a>
        </div>
    )
};

export default Category;


