import React from 'react';
import './Review.css';

const Review = ({singleReview}) => {
  const {img, name, review, rating} = singleReview;
  return (
    <div className='review-container'>
      <div className='review-img'>
        <img src={img} alt='' />
      </div>
      <div>
        <h4 className='review-name'>{name}</h4>
        <p className='review-detail'>{review}</p>
        <p className='review-rating'>{rating}</p>
      </div>
    </div>
  );
};

export default Review;