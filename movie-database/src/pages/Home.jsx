import { useState, useEffect } from "react";
import { fetchMovies } from "../api/tmdb";
import MovieList from "../components/MovieList";
import HeroSlider from "../components/HeroSlider";

const Home = () => {
  const [movies, setMovies] = useState([]); 
  const [category, setCategory] = useState("popular"); // set popular as default
  const [favorites, setFavorites] = useState([]); 
  const [heroMovies, setHeroMovies] = useState([]); 

  //fetch movies for the selected category
  useEffect(() => {
    fetchMovies(category).then(setMovies);
  }, [category]);

  //favorite movies from local storage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);
  
  //fetch "popular" category movies (top 10) for the Hero Slider
  useEffect(() => {
    fetchMovies("popular").then((movies) => setHeroMovies(movies.slice(0, 10)));
  }, []);

  //favorite movies
  const handleFavoriteToggle = (movie) => {
    const updatedFavorites = favorites.some((fav) => fav.id === movie.id)
      ? favorites.filter((fav) => fav.id !== movie.id) //remove if already favorited
      : [...favorites, movie]; 

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); //update local storage
  };

  return (
    <div className="home-container">
       {/* hero slider */}
       <HeroSlider movies={heroMovies} />

      {/* category nav */}
      <div className="category-nav">
        {/* Show buttons on large screens, dropdown on small screens */}
        <div className="category-buttons">
          {["popular", "now_playing", "top_rated", "upcoming"].map((type) => (
            <button key={type} className="category-button" onClick={() => setCategory(type)}>
              {type.replace("_", " ").toUpperCase()}
            </button>
          ))}
        </div>
        <select className="category-dropdown" onChange={(e) => setCategory(e.target.value)}>
          {["popular", "now_playing", "top_rated", "upcoming"].map((type) => (
            <option key={type} value={type}>
              {type.replace("_", " ").toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {/* movie list  */}
      <MovieList movies={movies} favorites={favorites} onFavoriteToggle={handleFavoriteToggle} />
    </div>
  );
};

export default Home;
