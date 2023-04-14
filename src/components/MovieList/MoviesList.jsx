import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <li className={css.li} key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
            alt={movie.title}
          />
          <Link
            className={css.link}
            to={`/movies/${movie.id}`}
            state={location}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
