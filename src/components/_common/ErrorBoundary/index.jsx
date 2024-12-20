import styles from "./index.module.css"

const ErrorBoundary = () => {
  return (
    <div className={styles.ErrorBoundary}>
      <h1>¡Ups! Ha ocurrido un error.</h1>
    </div>
  )
}

export default ErrorBoundary