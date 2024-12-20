import { useEffect } from 'react'
import useGenres from '../../../hooks/useGenres'
import MovieList from '../../../components/MoviesList'
import styles from "./index.module.css"
import LoadingSpinner from '../../../components/_common/LoadingSpinner'
import ErrorBoundary from '../../../components/_common/ErrorBoundary'

const Categories = () => {
  const { genres, isLoading, error, fetchGenres } = useGenres()

  useEffect(() => {
    fetchGenres()
  }, [])

  return (
    <section className={styles.CategoriesSection}>
      {isLoading ?
        <div style={{height: "500px", width: "100%", background: "blue"}}>
          <LoadingSpinner color="white" />
        </div> :
        genres?.map(genre =>
          <article key={`category-item-${genre.id}`} className={styles.GenreMoviesList}>
            {/* <h4>{genre.name}</h4> */}
            <MovieList
              id={`movie-list-${genre.id}`}
              genreID={genre.id}
              genres={genres}
              genreName={genre.name}
            />
          </article>
        )}
        {error && 
          <div style={{height: "95svh"}}>
            <ErrorBoundary />
          </div>
        }
    </section>
  )
}

export default Categories