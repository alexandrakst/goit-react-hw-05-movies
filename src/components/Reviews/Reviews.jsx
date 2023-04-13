import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { reviewsById } from 'api/Api';
import { Suspense } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);

  const { movieId } = useParams();

  const getReviews = async movieId => {
    if (!movieId) return;

    try {
      const reviews = await reviewsById(movieId);
      setReviews(reviews);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReviews(movieId);
  }, [movieId]);

  const isReviews = reviews && reviews.length !== 0;

  return (
    <Suspense>
      <ul>
        {isReviews ? (
          reviews.map(({ author, content, id }) => (
            <li key={id}>
              <p>User: {author}</p>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    </Suspense>
  );
}
