import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { creditsById } from 'api/Api';
import { Suspense } from 'react';

export default function Cast() {
  const [cast, setCast] = useState(null);

  const { movieId } = useParams();

  const getCast = async movieId => {
    if (!movieId) return;

    try {
      const cast = await creditsById(movieId);
      setCast(cast);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCast(movieId);
  }, [movieId]);

  return (
    <Suspense>
      <ul>
        {cast?.map(actor => {
          const { character, name, profile_path: profilePath, id } = actor;
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profilePath}`}
                alt={name}
                width="120"
              />
              <div>
                <p>{name}</p>
                <p>{character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Suspense>
  );
}
