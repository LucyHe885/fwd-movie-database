import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import "../App.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleFavoriteToggle = (movie) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
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
