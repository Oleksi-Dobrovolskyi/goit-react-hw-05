import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../tmdb-api";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ id, name, profile_path }) => (
        <li key={id}>
          <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
}

