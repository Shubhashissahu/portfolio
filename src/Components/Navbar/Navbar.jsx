import React, { useState } from "react";
import styles from "./Navbar.module.css";

// Correct image imports for React (CRA/Vite)
import closeIcon from "../../assets/nav/closeIcon.png";
import menuIcon from "../../assets/nav/menuIcon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="#">
        Portfolio
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen((prev) => !prev)}
        />

        <ul
          className={`${styles.menuItems} ${
            menuOpen ? styles.menuOpen : ""
          }`}
        >
          <li>
            <a href="#About" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#Skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#Contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
