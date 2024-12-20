import styles from "./index.module.css"

const CarouselItem = ({ title, description, imgURL, isFirstItem }) => {

  return (
    <article
      className={`carousel-item ${isFirstItem ? "active" : ""} ${styles.MovieSlide}`}
      style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${imgURL}")` }}
    >
      <section className={styles.Text}>
        <h1 className={styles.Title}>{title}</h1>
        <p className={styles.Description}>{description}</p>
      </section>
    </article>
  )
}
export default CarouselItem;