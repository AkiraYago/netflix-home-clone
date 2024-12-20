import { useState } from "react";

const BASE_URL = "https://api.themoviedb.org/3/discover/movie"

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
  }
};

const useMovieByGenre = () => {
  const [moviesByGenre, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const fetchMoviesByGenre = async (genreID, genres, slidesToShow = 5) => {
    try {
      const res = await fetch(`${BASE_URL}?language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreID ? genreID : ""}`, options);
      const movies = await res.json();
      const formatedMovies = formatMovies(movies.results, slidesToShow, genres)
      
      setMovies(formatedMovies);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  const formatMovies = (movies, slidesToShow, genres) => {
    const formatedResults = movies.map(movie => ({
      ...movie,
      genre_names: movie.genre_ids.map(id => genres.find(genre => genre.id === id).name)
    }))
    const chunkedMovies = [];
    for (let i = 0; i < formatedResults.length; i += slidesToShow) {
      chunkedMovies.push(formatedResults.slice(i, i + slidesToShow));
    }
    return chunkedMovies;
  };

  return {
    moviesByGenre,
    isLoading,
    error,
    fetchMoviesByGenre,
  }
}

export default useMovieByGenre;