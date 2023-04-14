import PropTypes from 'prop-types';
import css from './MovieInfo.module.css';

export default function MovieInfo({ movie }) {
  const {
    poster_path: posterPath,
    title,
    release_date: releaseDate,
    overview,
    vote_average: voteAverage,
    genres,
  } = movie;

  const vote = Math.round(voteAverage);

  const getFullYear = dateString => {
    const date = new Date(dateString);
    return date.getFullYear();
  };

  return (
    <div className={css.movieInfoLayout}>
      <img
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        alt={title}
        height="400"
      />
      <div className={css.movieInfo}>
        <h2>
          {title} ({getFullYear(releaseDate)})
        </h2>
        <p>
          User Score: <span>{vote}</span>
        </p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres?.reduce((acc, genre) => acc + genre.name + ' ', '')}</p>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};
