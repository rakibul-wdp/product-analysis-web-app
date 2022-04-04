import React from 'react';

const AllReview = ({allReview}) => {
  const { img, name, review, rating } = allReview;
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

export default AllReview;