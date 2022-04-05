import { useEffect, useState } from "react"

const useReview = () => {
      const [Reviewss, setReviewss] = useState([]);
      useEffect(() => {
            fetch('Review.jsson')
                  .then(res => res.json())
                  .then(data => console.log(data))
      }, []);

      return [Reviewss, setReviewss];
}

export default useReview