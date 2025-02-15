import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import "../App.css";

const Favorites = ({ onFavoriteToggle }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  //handle the toggling of a movie in and out of the favorites list
  const handleFavoriteToggle = (movie) => {
    //filters the favorites array to remove the mmovie with the matching id
    const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    setFavorites(updatedFavorites);
    //update list of favorites is saved back into localstrage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    if (onFavoriteToggle) {
      onFavoriteToggle(movie);
    }
  };

  return (
    <div className="favorites-container">
      <h1 className="favorites-title">Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <MovieList movies={favorites} favorites={favorites} onFavoriteToggle={handleFavoriteToggle} />
      )}
      <p className="add-content">To add your favorite movie...</p>
    </div>
  );
};

export default Favorites;
