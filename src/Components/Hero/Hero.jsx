import React from 'react'
import heroimg from "../../assets/hero/image2.png";

import styles from "./Hero.module.css";

export const Hero = () => {
  return <section className={styles.container}>
   <div className={styles.content}>
    <h1 className={styles.tittle}>Hi i am shubhashis</h1>
    <p className={styles.description}>I am a full stack developer 
        of using react and node js
    </p>
    <a href="maillto:shubhashissahu261@gmail.com" className={styles.contactbtn}>contact me</a>
   </div>
   <img src = {heroimg }alt='heroimage ' className={styles.heroimg}/>
  <div className={styles.topBlur}/>
  <div className={styles.bottomBlur} />

  </section>
}


