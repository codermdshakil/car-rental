import React from 'react';
import './NotFound.css';



const NotFound = () => {
    const img = 'https://i.pinimg.com/originals/a8/12/1a/a8121abee959e18cbad25ad4046f76d8.gif';
    return (
        <div className='not-found-container'>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;