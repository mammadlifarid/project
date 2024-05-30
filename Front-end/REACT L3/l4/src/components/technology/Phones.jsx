import React from 'react';
import "./style.css";
const Phones = ({ img_url, model, storage, price }) => {
    return (
        <div className="product">
            <img src={img_url} />
            <h2>{model}</h2>
            <p> {storage}</p>
            <p>{price}</p>
        </div>
    );
}

export default Phones;
