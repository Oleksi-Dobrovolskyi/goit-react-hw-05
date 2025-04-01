import { useState, useEffect } from "react";
import { Link, useParams, useLocation, Outlet } from "react-router-dom";
import { fetchMovieDetails } from "../../tmdb-api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }
    getMovie();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="styles.container">
      <Link to={location.state?.from ?? "/movies"}>Go back</Link>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />

      <h3>Additional Information</h3>
      <ul>
        <li>
          <Link to="cast" state={{ from: location.state?.from }}>Cast</Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state?.from }}>Reviews</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

