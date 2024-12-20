import Logo from "../../_common/Logo";
import styles from "./index.module.css";

const Navbar = () => {

  return (
    <nav className={styles.Navbar}>
      <Logo />
      <a href="#contact-info" className={`btn ${styles.CallToAction}`}>
        <i className="bi bi-arrow-down-circle" />
        Contact me!
      </a>
    </nav>
  );
}

export default Navbar;