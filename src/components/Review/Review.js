import React from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = ({singleReview}) => {
  const {img, name, review, rating} = singleReview;
  return (
    <div className='review-container'>
      <div className='review-img'>
        <img src={img} alt='' />
      </div>
      <div className='review-details-text'>
        <h4 className='review-name'>{name}</h4>
        <p className='review-detail'>{review}</p>
        <div className='review-rating'>
          <span><FontAwesomeIcon className='rating-icon' icon={faStar}/></span>
          <span><FontAwesomeIcon className='rating-icon' icon={faStar}/></span>
          <span><FontAwesomeIcon className='rating-icon' icon={faStar}/></span>
          <span><FontAwesomeIcon className='rating-icon' icon={faStar}/></span>
        </div>
      </div>
    </div>
  );
};

export default Review;