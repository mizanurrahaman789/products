import React, { useEffect, useState } from 'react';
import Reviews from '../Reviews/Reviews';
import './Shop.css'

const Shop = () => {
      const [Review, setReview] = useState([])
      useEffect(() => {
            fetch('Review.json')
                  .then(res => res.json())
                  .then(data => setReview(data))
      }, [])
      return (
            <div className='shop-container'>

                  <div className='shop-text'>
                        <h2>Customer Reviews ({Review.length})</h2>
                  </div>
                  <div className='shop-item'>
                        {
                              Review.map(reviews => <Reviews
                                    key={Reviews.id}
                                    Reviews={reviews}
                              ></Reviews>)
                        }
                  </div>
                  <div className='button-text'>
                        <button><h1>See All Reviews</h1></button>
                  </div>
            </div>
      );
};

export default Shop;