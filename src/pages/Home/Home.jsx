import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trendingMovies } from 'api/Api';
import css from './Home.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const getMovies = async () => {
    try {
      const movies = await trendingMovies();
      setMovies(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main>
      <h1 className={css.homeHeader}>Trending Today</h1>
      <ul className={css.homeList}>
        {movies.map(movie => (
          <Link
            className={css.homeMovieTitle}
            key={movie.id}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
              alt={movie.title}
              className={css.homeMovieImg}
            />
            <p className={css.homeP}>{movie.title || movie.name}</p>
          </Link>
        ))}
      </ul>
    </main>
  );
}
