import axios from "axios";

const API_KEY = "d898368f19d84ace21f3b67e65807d39";  
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${category}`, {
      params: { api_key: API_KEY },
    });
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching ${category} movies`, error);
    return [];
  }
};
