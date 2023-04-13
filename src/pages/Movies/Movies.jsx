import { useSearchParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { movieQuerySearch } from 'api/Api';
import MovieList from '../../components/MovieList/MoviesList';

export default function Movies() {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!inputValue) {
      alert('Please enter a search query to fing movies');
      return;
    }

    updateQueryString(inputValue);
    setInputValue('');
  };

  const onChange = e => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const getMoviesByQuery = async () => {
      try {
        const movies = await movieQuerySearch(movieQuery);
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };

    getMoviesByQuery();
  }, [movieQuery]);

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <form onSubmit={onSubmit}>
          <input type="text" value={inputValue} onChange={onChange} />
          <button type="submit">search</button>
        </form>
        {movies !== null && movies.length !== 0 && (
          <MovieList movies={movies}></MovieList>
        )}
      </Suspense>
    </>
  );
}
