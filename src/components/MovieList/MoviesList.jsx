import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id}>
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
