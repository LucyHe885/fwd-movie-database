import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const MovieCard = ({ movie, onFavoriteToggle, isFavorite: initialFavorite }) => {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);
  const navigate = useNavigate();
  //update isfavorite state whenever the initialfavorites change
  useEffect(() => {
    setIsFavorite(initialFavorite);
  }, [initialFavorite]);

  //toggle favorite status when button clicked
  //update local state
  const handleFavoriteClick = () => {
    const updatedFavorite = !isFavorite;
    setIsFavorite(updatedFavorite);
    onFavoriteToggle(movie); 
  };

  //nav to mvie detial page 
  const handleMovieClick = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="movie-card" onClick={handleMovieClick}>
      <div className="poster-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="poster"
        />
        <div className="hover-state">
          <p>{new Date(movie.release_date).getFullYear()}</p>
          <p>{movie.overview.slice(0, 100)}...</p>
        </div>
        <div className="favorites-button" onClick={(e) => { e.stopPropagation(); handleFavoriteClick(); }}>
          {isFavorite ? (
            <svg className="like" xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 24 24">
              <path className="like-path" d="M19 24l-7-6-7 6v-24h14v24z" fill="white" stroke="currentColor" stroke-width="2" />
            </svg>
          ) : (
            <svg className="unlike" xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 24 24">
              <path className="unlike-path" d="M19 24l-7-6-7 6v-24h14v24z" fill="white" stroke="currentColor" stroke-width="2" />
            </svg>
          )}
        </div>
      </div>
      <div className="movie-info">
        <h2 className="movie-title">{movie.title}</h2>
        <div className="movie-meta">
          <p className="movie-year">{new Date(movie.release_date).getFullYear()}</p>
          <p className="movie-rating">⭐{movie.vote_average.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
