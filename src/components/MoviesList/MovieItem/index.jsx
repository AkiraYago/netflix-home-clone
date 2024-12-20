import { useState } from "react"
import styles from "./index.module.css"

const MovieItem = ({ title, description, imgURL, genreNames }) => {
  const [showDetails, setShowDetails] = useState(false)
  const [flipCard, setFlipCard] = useState(false)

  const handleMouseOver = () => setShowDetails(true)
  const handleMouseLeave = () => setShowDetails(false)
  const handleClickDetails = () => setFlipCard(!flipCard)
  const handleMouseLeaveDetails = () => setFlipCard(false)

  return (
    <article
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={`col-12 col-sm-6 col-lg-3 col-xl ${styles.MovieChunk}`}
    >
      {showDetails &&
        <DetailsCard
          imgURL={imgURL}
          title={title}
          description={description}
          genreNames={genreNames}
          isCardFliped={flipCard}
          onClick={handleClickDetails}
          onMouseLeave={handleMouseLeaveDetails}
        />}
      {imgURL ?
        <img
          className={styles.MovieImg}
          src={`https://image.tmdb.org/t/p/original${imgURL}`}
          alt="movie-img"
        /> :
        <NoImageAvaible />}
    </article>
  )
}

export default MovieItem

const NoImageAvaible = () => {
  return (
    <div className={styles.NoImage}>
      <i style={{ fontSize: "100px" }} className="bi bi-card-image"></i>
      <h5>NO IMAGE AVAIBLE</h5>
    </div>
  )
}

const DetailsCard = ({ imgURL, title, description, genreNames, onClick, onMouseLeave, isCardFliped }) => {
  return (
    <article
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      className={`card ${styles.Details}`}
      style={{
        transform: isCardFliped ?
          "rotateY(180deg)" :
          "rotateY(0deg)"
      }}
    >
      <article className={styles.CardFront}>
        {
          imgURL ?
            <img
              src={`https://image.tmdb.org/t/p/original${imgURL}`}
              className="card-img-top"
              alt="movie-img"
            /> :
            <NoImageAvaible />
        }
        <main className={`card-body ${styles.Body}`}>
          <h5 className="card-text">{title}</h5>
          <section className={styles.Genres}>
            {genreNames.map((genre, index) =>
              <span key={`genre-item-${index}`} className={styles.GenreItem}>{genre}</span>
            )}
          </section>
        </main>
      </article>
      <article className={styles.CardBack}>
        <h5>{title}</h5>
        <p className={styles.Description}>{description}</p>
      </article>
    </article>
  )
}