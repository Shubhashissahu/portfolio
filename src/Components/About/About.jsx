import { FaBrain, FaCode, FaRocket, FaStar } from "react-icons/fa";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="About">
      <h2 className={styles.heading}>
        About <span>Me</span>
      </h2>

      <div className={styles.wrapper}>
        <div className={styles.textBox}>
          <p>
            I am a passionate <span>B.Tech Computer Science</span> student with a strong
            interest in full-stack development, programming, and building smart digital
            solutions that solve real-world problems.
          </p>

          <p>
            As a <span>Web Developer</span>, I enjoy creating modern, responsive, and
            visually appealing user interfaces using React, CSS modules, and optimized
            frontend architectures.
          </p>

          <p>
            As a <span>Programmer</span>, I focus on writing clean, efficient, and
            scalable code while continuously learning new technologies and improving
            my problem-solving abilities.
          </p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}><FaBrain /></div>
            <h3>Analytical Thinker</h3>
            <p>Strong logical and problem-solving mindset.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}><FaCode /></div>
            <h3>Web Development</h3>
            <p>Skilled in building responsive and modern web applications.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}><FaRocket /></div>
            <h3>Fast Learner</h3>
            <p>Always exploring new tech and improving skills continuously.</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}><FaStar /></div>
            <h3>Quality Focused</h3>
            <p>Dedicated to writing efficient, clean, and scalable code.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
