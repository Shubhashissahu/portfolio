import React from "react";
import skill from "../../data/skills.json"; // Make sure this JSON file exists

import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils"; // if you already use this helper for images

export const Skills = () => {
  return (
    <section id="Skills" className={styles.container}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        {skill.map((item, index) => (
          <div key={index} className="skill-card">
            <div className="skill-image">
            <img src={getImageUrl(skill.imagesrc)} alt={item.name} />
            </div>
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
