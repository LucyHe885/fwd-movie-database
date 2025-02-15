import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";

const API_KEY = "d898368f19d84ace21f3b67e65807d39";
const BASE_URL = "https://api.themoviedb.org/3";

const MovieDetails = ({onFavoriteToggle, favorites}) => {
  //extracts the movie id frome the url parameters
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  //to fetch movie data when the component mounters, movie id and favorites
  useEffect(() => {
    //fetch movie detials from api
    axios.get(`${BASE_URL}/movie/${id}`, { params: { api_key: API_KEY } })
    .then(response => {
      setMovie(response.data);
      //check if the movie is in the favorites list
      const isFav = favorites.some((fav) => fav.id === response.data.id);
      setIsFavorite(isFav);
    })
      .catch(error => console.error("Error fetching movie details", error));
  }, [id, favorites]);

  //favorite status of movie
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    //update the favorites list
    onFavoriteToggle(movie); 
  };


  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details-container">
      {/* Movie Poster */}
      <div className="movie-poster-container">
        <img 
          //construct the img url
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title} 
          className="movie-poster"
        />
      </div>

      
      {/* Movie Info */}
      <div className="movie-info">
        <div className="title-container">
        <h1 className="movie-detial-title">{movie.title} ({new Date(movie.release_date).getFullYear()})</h1>
        {/* favorites button */}
        <div className="favorites-detial-button" onClick={(e) => { e.stopPropagation(); handleFavoriteClick(); }}>
          {isFavorite ? (
            <svg className="like" xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 24 24">
              <path className="like-path" d="M19 24l-7-6-7 6v-24h14v24z" fill="white" stroke="currentColor" stroke-width="2"/>
            </svg>
          ) : (
            <svg className="unlike" xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 24 24">
              <path className="unlike-path" d="M19 24l-7-6-7 6v-24h14v24z" fill="white" stroke="currentColor" stroke-width="2"/>
            </svg>

          )}
        </div>
        </div>
        <div className="detial-info">
        {/* AI */}
        {/* movies genres is an array of genre objects the contain a name property */}
        {/* joins the array elements into a single string */}
        <p>Genres: {movie.genres.map(genre => genre.name).join(", ")}</p>
        {/* .tolocaldatestring converts this date object into a string formatted according to the local convertions */}
        <p className="movie-year">{new Date(movie.release_date).toLocaleDateString().split('T')[0]}</p>
        <p>{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</p>
        <p className="movie-rating">⭐ {movie.vote_average.toFixed(1)}</p>
        </div>
        <p className="movie-detial-overview">{movie.overview}</p>
        <p className="detial-watch-now-button">Watch Now</p>
      </div>
    </div>
  );
};

export default MovieDetails;
