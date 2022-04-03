import React from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';


const Review = ({ review }) => {

    const { name, img, text, reating} = review;

    return (
        <div className='col-lg-4 col-md-6 col-10 d-block m-auto m-md-0'>
            <div className='review-box'>
                <div className='customer-image-frame'>
                    <img src={img} alt="review_img" />
                    <div>
                        <h5>{name}</h5>
                        {reating  < 5 ?<p>{reating} <FontAwesomeIcon className='star' icon={faStarHalfAlt}/></p> : <p>{reating} <FontAwesomeIcon className='star' icon={faStar}/></p>  }
                    </div>
                </div>
                <div className='customer-commnet'>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;