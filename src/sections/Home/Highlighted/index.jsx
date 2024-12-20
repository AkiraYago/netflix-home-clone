import { useEffect } from "react";
import useUpcomingMovies from "../../../hooks/useUpcomingMovies";
import CarouselItem from "./CarouselItem";
import styles from "./index.module.css";
import LoadingSpinner from "../../../components/_common/LoadingSpinner";
import ErrorBoundary from "../../../components/_common/ErrorBoundary";

const Highlighted = () => {
  const { movies, isLoading, error, fetchMovies } = useUpcomingMovies()

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <section id="highlighted" className={`carousel slide ${styles.Highlighted}`} data-bs-ride="ride">
      <div className={`carousel-inner ${styles.CarouselInner}`}>
        {isLoading ?
          <LoadingSpinner color="white" /> :
          movies?.map((movie, index) =>
            <CarouselItem
              key={`carousel-item-${movie.id}`}
              title={movie.title}
              description={movie.overview}
              imgURL={movie.backdrop_path}
              isFirstItem={index === 0 && true}
            />
          )}
          {error && <ErrorBoundary />}
      </div>
      <button className={`carousel-control-prev ${styles.ButtonPrev}`} type="button" data-bs-target="#highlighted" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className={`carousel-control-next ${styles.ButtonNext}`} type="button" data-bs-target="#highlighted" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  );
}

export default Highlighted;