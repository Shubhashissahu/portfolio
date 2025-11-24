import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Portfolio</h2>
          <p className={styles.copyright}>
            © {currentYear} All rights reserved.
          </p>
        </div>
        <button onClick={scrollToTop} className={styles.backToTop}>
          Back to Top <span>↑</span>
        </button>
      </div>
    </footer>
  );
};

