import { useState } from "react"
const BASE_URL = "https://api.themoviedb.org/3/movie/upcoming"

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
  }
};

const useUpcomingMovies = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  const fetchMovies = async () => {
    try {
      setIsLoading(true)
      const res = await fetch(`${BASE_URL}?language=en-US&page=1`, options)
      const movies = await res.json()
      setMovies(movies.results)
    } catch (err) {
      setError(err)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    movies,
    isLoading,
    error,
    fetchMovies,
  }
}

export default useUpcomingMovies