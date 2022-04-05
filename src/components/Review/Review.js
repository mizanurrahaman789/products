import React from 'react';
import useReview from '../../hooks/useReview';

const Review = () => {
      const [Reviewss, setReviewss] = useReview();

      return (
            <div>
                  <h1>Tomi ami eije Eikhane{Reviewss.length}</h1>

            </div>
      );
};

export default Review;