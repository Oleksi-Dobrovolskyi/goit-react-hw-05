import axios from 'axios';

const API_KEY = '0b851fff618eec7545c8702977e8fc88';
const BASE_URL = 'https://api.themoviedb.org/3';
const HEADERS = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};


export const getTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day?language=en-US`, HEADERS);
  return response.data.results;
};


export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, HEADERS);
  return response.data.results;
};


export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}?language=en-US`, HEADERS);
  return response.data;
};


export const getMovieCredits = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?language=en-US`, HEADERS);
  return response.data.cast;
};


export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`, HEADERS);
  return response.data.results;
};
