import styles from "./index.module.css"

const Logo = () => {
  return (
    <a className={styles.Logo} href="/#">
      <img className={styles.Img} src="/assets/imgs/netflix-logo.svg" alt="Imagen del logo" />
    </a>
  )
}

export default Logo