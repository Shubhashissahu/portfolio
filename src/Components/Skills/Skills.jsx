import { useState } from "react";
import styles from "./Skills.module.css";

import {
  Code,
  Server,
  Wrench,
  Zap,
  Layers,
  Rocket,
} from "lucide-react";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    {
      name: "React",
      icon: <Layers className={styles.iconSize} />,
      level: "Advanced",
      color: "#61DAFB",
      description: "Hooks, Context, Custom Components",
    },
    {
      name: "JavaScript",
      icon: <Code className={styles.iconSize} />,
      level: "Advanced",
      color: "#F7DF1E",
      description: "ES6+, Async/Await, DOM Manipulation",
    },
    {
      name: "CSS Modules",
      icon: <Wrench className={styles.iconSize} />,
      level: "Proficient",
      color: "#2965f1",
      description: "Scoped Styles, Animations, Grid/Flexbox",
    },
    {
      name: "HTML5",
      icon: <Server className={styles.iconSize} />,
      level: "Advanced",
      color: "#E34F26",
      description: "Semantic Markup, Accessibility, SEO",
    },
    {
      name: "Node.js",
      icon: <Rocket className={styles.iconSize} />,
      level: "Intermediate",
      color: "#68A063",
      description: "Express, REST APIs, Async Operations",
    },
    {
      name: "Git/GitHub",
      icon: <Zap className={styles.iconSize} />,
      level: "Proficient",
      color: "#F05032",
      description: "Version Control, Collaboration, Branching",
    },
  ];

  return (
    <section id="Skills" className={styles.skillsContainer}>
      <div className={styles.skillsHeader}>
        <h2 className={styles.sectionTitle}>TECHNICAL SKILLS</h2>
      </div>

      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`${styles.skillCard} ${
              activeSkill === index ? styles.active : ""
            }`}
            onMouseEnter={() => setActiveSkill(index)}
            onMouseLeave={() => setActiveSkill(null)}
            style={{ "--skill-color": skill.color }}
          >
            <div
              className={styles.skillIcon}
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>

            <h3 className={styles.skillName}>{skill.name}</h3>
            <span className={styles.skillLevel}>{skill.level}</span>
            <p className={styles.skillDescription}>
              {skill.description}
            </p>

            <div className={styles.skillGlow} />
          </div>
        ))}
      </div>

      <div className={styles.additionalSkills}>
        <h4 className={styles.additionalTitle}>
          Also Experienced With
        </h4>

        <div className={styles.tagsContainer}>
          {[
            "TypeScript",
            "Tailwind CSS",
            "Redux",
            "MongoDB",
            "Vite",
            "REST APIs",
            "Responsive Design",
            "Figma",
          ].map((tech, index) => (
            <span key={index} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
