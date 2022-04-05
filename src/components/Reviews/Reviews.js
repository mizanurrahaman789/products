import React, { useEffect, useState } from 'react';

import './Reviews.css';


const Reviews = (props) => {
      const { name, id, phone, email, website, img, rating, comments } = props.Reviews

      return (
            <div className='reviews-container'>
                  <div>
                        <img src={img} alt=""></img>

                        <h3>name: {name}</h3>

                        <h5>Email: {email}</h5>
                        <h5>Website: {website}</h5>
                        <h5>Phone: {phone}</h5>
                        <h5>Comments: {comments}</h5>
                        <h3>Rating: {rating}</h3>
                  </div>
                  <div>

                  </div>
            </div>
      );
};

export default Reviews;