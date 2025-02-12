import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "../App.css";


const HeroSlider = ({ movies }) => {
    const navigate = useNavigate(); // navigation function to go to movie details

    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`); // navigate to movie detail page
    };
  
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      loop={true}
      className="hero-slider"
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className="hero-image-container" onClick={() => handleMovieClick(movie.id)}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
              className="hero-image"
            />
            <div className="hero-overlay">
              <h3 className="hero-title">{movie.title}</h3>
              <p className="date">{new Date(movie.release_date).getFullYear()}</p>
              <p className="movie-overview">{movie.overview.slice(0, 200)}...</p>
              <div className="watch-now-button" onClick={(e) => { e.stopPropagation(); handleMovieClick(movie.id); }}>
                Watch Now
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
