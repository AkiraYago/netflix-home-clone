import { useEffect, useState } from "react"
import useMovieByGenre from "../../hooks/useMoviesByGenre"
import styles from "./index.module.css"
import MovieItem from "./MovieItem"
import LoadingSpinner from "../_common/LoadingSpinner"
import ErrorBoundary from "../_common/ErrorBoundary"
import { BOOTSTRAP_BREAKPOINTS } from "../../utils/consts"

const MovieList = ({ id, genreID, genres, genreName }) => {
  const { moviesByGenre, isLoading, error, fetchMoviesByGenre } = useMovieByGenre()

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;

      if (width >= BOOTSTRAP_BREAKPOINTS.XXL) {
        fetchMoviesByGenre(genreID, genres, 5)
      } else if (width >= BOOTSTRAP_BREAKPOINTS.XL) {
        fetchMoviesByGenre(genreID, genres, 5)
      } else if (width >= BOOTSTRAP_BREAKPOINTS.LG) {
        fetchMoviesByGenre(genreID, genres, 4)
      } else if (width >= BOOTSTRAP_BREAKPOINTS.MD) {
        fetchMoviesByGenre(genreID, genres, 2)
      } else if (width >= BOOTSTRAP_BREAKPOINTS.SM) {
        fetchMoviesByGenre(genreID, genres, 2)
      } else {
        fetchMoviesByGenre(genreID, genres, 1)
      }
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);

    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return (
    <article id={id} className={`carousel slide ${styles.MoviesList}`}>
      <h4>{genreName}</h4>
      <section className={`carousel-inner ${styles.MoviesCarousel}`}>
        {isLoading ?
          <div style={{ height: "200px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
            <LoadingSpinner color="white" />
            <LoadingSpinner color="white" />
            <LoadingSpinner color="white" />
            <LoadingSpinner color="white" />
            <LoadingSpinner color="white" />
          </div> :
          moviesByGenre.map((movieChunk, index) =>
            <article
              key={`carousel-item-${index}`}
              className={`carousel-item ${index === 0 ? "active" : ""} ${styles.MovieCarouselItem}`}
            >
              <div className={`row ${styles.MovieChunksList}`}>
                {movieChunk.map(movie =>
                  <MovieItem
                    key={`movie-chunk-${movie.id}`}
                    title={movie.title}
                    description={movie.overview}
                    date={movie.release_date}
                    genreNames={movie.genre_names}
                    imgURL={movie.backdrop_path}
                  />
                )}
              </div>
            </article>
          )}
        {error &&
          <div style={{ height: "200px" }}>
            <ErrorBoundary />
          </div>
        }
      </section>
      <button className={`carousel-control-prev ${styles.ButtonPrev}`} type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className={`carousel-control-next ${styles.ButtonNext}`} type="button" data-bs-target={`#${id}`} data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </article>
  )
}

export default MovieList