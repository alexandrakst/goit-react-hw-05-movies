import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '931e7fb1a09f8bcd023c19a0e53dc26e';

export async function trendingMovies() {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );

  return response.data.results;
}

export async function movieQuerySearch(query) {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
  );

  return response.data.results;
}

export async function creditsById(id) {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
  );

  return response.data.cast;
}

export async function movieById(id) {
  const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);

  return response.data;
}

export async function reviewsById(id) {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
  );

  return response.data.results;
}
