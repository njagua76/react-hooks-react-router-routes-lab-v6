import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p><strong>Runtime:</strong> {movie.time} mins</p>
      <p><strong>Genres:</strong> {movie.genres.join(", ")}</p>
      <Link to={`/movie/${movie.id}`} className="view-btn">
        View Details
      </Link>
    </div>
  );
}

export default MovieCard;
