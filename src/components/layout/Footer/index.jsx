import Logo from "../../_common/Logo"
import styles from "./index.module.css"

const Footer = () => {
  const email = "the.programmer.yago@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        alert("Correo copiado al portapapeles!");
      })
      .catch((err) => {
        console.error("Error al copiar el correo: ", err);
      });
  };

  return (
    <div id="contact-info" className={styles.Footer}>
      <section className={styles.Copyright}>
        <Logo />
        <div>
          <p>Copyright AkiraYago</p>
          <p>All rights reserved</p>
        </div>
        <article className={styles.EmailContainer}>
          <span className={styles.Email}>
            <i className="bi bi-envelope" />
            {email}
          </span>
          <button onClick={handleCopyEmail} className={styles.CopyButton}>
            <i className="bi bi-copy" />
          </button>
        </article>
      </section>
      <section className={styles.FooterItemsList}>
        <FooterItem link="https://www.linkedin.com/in/yagoellen/" title="LinkedIn">
          <i className={`bi bi-linkedin ${styles.Icon}`} />
        </FooterItem>
        <FooterItem link="https://drive.google.com/drive/folders/12QjxpRUhqNEbNsiSYFjxiI-kKza7LEKJ?usp=sharing" title="Curriculum">
          <i className={`bi bi-file-earmark-person ${styles.Icon}`} />
        </FooterItem>
        <FooterItem link="https://github.com/AkiraYago" title="Github">
          <i className={`bi bi-github ${styles.Icon}`} />
        </FooterItem>
      </section>

    </div>
  )
}

export default Footer

const FooterItem = ({ children, link, title }) => {
  return (
    <a href={link}>
      <article className={styles.FooterItem} title={title}>
        {children}
      </article>
    </a >
  )
}