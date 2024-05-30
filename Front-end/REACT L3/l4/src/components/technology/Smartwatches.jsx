import React from 'react';
import "./style.css";
const Smartwatches = ({ img_url, model, size, price }) => {
    return (
        <div className="product">
            <img src={img_url}  />
            <h2>{model}</h2>
            <p>Size: {size}mm</p>
            <p>Price: ${price}</p>
        </div>
    );
}

export default Smartwatches;
