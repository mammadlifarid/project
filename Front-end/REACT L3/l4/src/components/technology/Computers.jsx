import React from 'react';

const Computers = ({ img_url, model, storage, ram, price }) => {
    return (
        <div className="product">
            <img src={img_url}  />
            <h2>{model}</h2>
            <p>Storage: {storage}GB</p>
            <p>RAM: {ram}GB</p>
            <p>Price: ${price}</p>
        </div>
    );
}

export default Computers;
