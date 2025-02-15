import MovieCard from "./MovieCard";


const MovieList = ({ movies, onFavoriteToggle, favorites }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.some((fav) => fav.id === movie.id)}
          onFavoriteToggle={onFavoriteToggle}
        />
      ))}
    </div>
  );
};

export default MovieList;
