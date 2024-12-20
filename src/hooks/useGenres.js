import { useState } from "react";

const BASE_URL = "https://api.themoviedb.org/3/genre/movie/list"

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
  }
};

const useGenres = () => {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchGenres = async () => {
    try {
      setIsLoading(true)
      const res = await fetch(`${BASE_URL}?language=en`, options)
      const genres = await res.json()
      setGenres(genres.genres)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    genres,
    isLoading,
    error,
    fetchGenres,
  }
}

export default useGenres;