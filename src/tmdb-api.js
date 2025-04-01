import axios from "axios";

const API_KEY = "0b851fff618eec7545c8702977e8fc88"; 
const BASE_URL = "https://api.themoviedb.org/3";
const options = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjg1MWZmZjYxOGVlYzc1NDVjODcwMjk3N2U4ZmM4OCIsIm5iZiI6MTc0MzQxOTc2MS44OTYsInN1YiI6IjY3ZWE3OTcxNTA0MGE3NWI0YWU1NzJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mjQ5JL5yEe1UaJsp3FzhdQ2yylNapfFUZTikXEepr8o`,
  },
};

export async function fetchTrendingMovies() {
  const url = `${BASE_URL}/trending/movie/day?language=en-US`;
  const response = await axios.get(url, options);
  return response.data.results;
};
export async function fetchMoviesByQuery(query) {
  const url = `${BASE_URL}/search/movie?query=${query}&language=en-US&page=1&include_adult=false`;
  const response = await axios.get(url, options);
  return response.data.results;
};
export async function fetchMovieDetails(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?language=en-US`;
  const response = await axios.get(url, options);
  return response.data;
};

export async function fetchMovieCast(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/credits?language=en-US`;
  const response = await axios.get(url, options);
  return response.data.cast;
};

export async function fetchMovieReviews(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`;
  const response = await axios.get(url, options);
  return response.data.results;
}


