import styles from "./index.module.css"

const LoadingSpinner = ({ color }) => {
  return (
    <div className={styles.LoadingSpinner} style={{ color: color }}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default LoadingSpinner;