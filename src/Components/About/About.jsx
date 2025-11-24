import React from "react";
import aboutimg from "../../assets/about/aboutImage.png";
import cursor from "../../assets/about/cursorIcon.png";
import server from "../../assets/about/serverIcon.png";
import uicon from "../../assets/about/uiIcon.png";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="About">
      <h2 className={styles.title}>About</h2>

      <div className={styles.content}>
        <img
          src={aboutimg}
          alt="about"
          className={styles.aboutimage}
        />

        <ul className={styles.aboutitems}>
          <li className={styles.aboutitem}>
            <img src={cursor} alt="cursor icon" />
            <div>
              <h3>Frontend Developer</h3>
              <p>I'm a frontend developer with experience in building and optimizing sites.</p>
            </div>
          </li>

          <li className={styles.aboutitem}>
            <img src={server} alt="server icon" />
            <div>
              <h3>Backend Developer</h3>
              <p>I have experience designing scalable APIs and server-side applications.</p>
            </div>
          </li>

          <li className={styles.aboutitem}>
            <img src={uicon} alt="UI icon" />
            <div>
            <h3>UI Designer</h3>
            <p>I design clean and intuitive user interfaces with attention to detail.</p>
            </div>
        </li>
        </ul>
    </div>
    </section>
  );
};
