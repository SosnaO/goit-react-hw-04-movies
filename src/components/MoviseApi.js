import axios from 'axios';

const API_KEY = '9060d75a42548d00033b78fc23f6dea4';

const fetchTrendingMovies = async () => {
  const { data } = await axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
  return data.results;
};

const fetchMoviesByQuery = async query => {
  const { data } = await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1`
    );
  return data.results;
};

const fetchMovies = async movieId => {
  const { data } = await axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
  return data;
};

const fetchAboutActors = async movieId => {
  const { data } = await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
    );
  return data;
};

const fetchReviews = async movieId => {
  const { data } = await axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`
    );
  return data;
};

export {
  fetchTrendingMovies,
  fetchMoviesByQuery,
  fetchMovies,
  fetchAboutActors,
  fetchReviews,
};