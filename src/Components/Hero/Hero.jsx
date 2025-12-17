import heroimg from "../../assets/hero/profile photo.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I’m Shubhashis</h1>

        <p className={styles.description}>
          I build fast, scalable web applications with React and Node.js,
focused on clean UI and real-world problem solving.

        </p>

        <a
        
          className={styles.contactbtn}
        >
        View Projects
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
