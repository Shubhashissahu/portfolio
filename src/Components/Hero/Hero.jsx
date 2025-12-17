import heroimg from "../../assets/hero/profile photo.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I’m <span>Shubhashis</span>
        </h1>

        <p className={styles.description}>
          I design and build modern web applications with React and Node.js,
          focused on performance, clean UI, and real-world solutions.
        </p>

        <a href="#projects" className={styles.contactbtn}>
          View Projects
        </a>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src={heroimg}
          alt="Shubhashis profile"
          className={styles.heroimg}
        />
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
