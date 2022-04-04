import React from 'react';
import useReviews from '../../hooks/useReviews';
import AllReview from '../AllReview/AllReview';

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <h2>Customer Review(All Review)</h2>
      {
        reviews.map(allReview => <AllReview key={allReview.id} allReview={allReview}/>)
      }
    </div>
  );
};

export default Reviews;