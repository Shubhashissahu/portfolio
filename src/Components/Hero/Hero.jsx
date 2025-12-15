import heroimg from "../../assets/hero/circle pic.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I’m Shubhashis</h1>

        <p className={styles.description}>
          I am a full-stack developer working with React and Node.js.
        </p>

        <a
          href="mailto:shubhashissahu261@gmail.com"
          className={styles.contactbtn}
        >
          Contact Me
        </a>
      </div>

      <img
        src={heroimg}
        alt="Hero"
        className={styles.heroimg}
        loading="eager"
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
