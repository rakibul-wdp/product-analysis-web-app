import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
  const [reviews, setReviews] = useReviews();
  const navigate = useNavigate();
  const showAllReview = () => {
    navigate('/reviews');
  };
  return (
    <div>
      <div className='home-container'>
        <div className='home-img'>
          <img
            src={`https://cdn.shopify.com/s/files/1/0059/0630/1017/files/keyboard-guide-2_2400x.jpg?v=1643451442`}
            alt=''
          />
        </div>
        <div className='home-details'>
          <h2 className='home-header-one'>Developer Hearts</h2>
          <h2 className='home-header-two'>Increase Speed</h2>
          <p className='home-para'>
            Keyboard is most important thing for developer. And also who type most of the time front of the computer
            monitor. So it's a part of life for developer fo who type by keyboard. There are many kind of keyboard. But
            if you type large of time, you need to a mechanical keyboard. It's increase typing speed more than normal
            keyboard. Also increase your productivity. If your are a gamer you need to serious about your keyboard. So
            your first choose should be mechanical keyboard.
          </p>
          <button className='home-btn'>Know More</button>
        </div>
      </div>
      <div className='home-review'>
        <h2 className='home-customer-header'>Customer Reviews(3)</h2>
        {reviews.slice(0, 3).map((singleReview) => (
          <Review key={singleReview.id} singleReview={singleReview} />
        ))}
        <button className='see-all-review-btn' onClick={showAllReview}>
          See All Review
        </button>
      </div>
    </div>
  );
};

export default Home;
