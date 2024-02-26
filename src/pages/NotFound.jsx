import React from 'react';
import image from "../assets/404.jpg"

const NotFound = () => {
    return (
        <div className='centering'>
            <img src={image} alt='404'/>
        </div>
    );
};

export default NotFound;