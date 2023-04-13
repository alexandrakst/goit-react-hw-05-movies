import { Suspense, useEffect, useState, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { movieById } from 'api/Api';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useRef(useLocation());

  const backLinkLocationRef = useRef(location.state);

  const getMovieInfo = async movieId => {
    if (!movieId) return;

    try {
      const movieInfo = await movieById(movieId);
      setMovie(movieInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieInfo(movieId);
  }, [movieId]);

  return (
    <>
      {movie && (
        <div>
          <Link
            to={backLinkLocationRef.current ? backLinkLocationRef.current : '/'}
          >
            Go back
          </Link>
          <MovieInfo movie={movie} />
        </div>
      )}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
