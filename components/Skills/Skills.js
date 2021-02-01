import SvgIcon from "../SvgIcon";
import styles from "./Skills.module.scss";

const skillsArr = [
  {
    title: "Front End",
    techArr: ["Javascript", "HTML", "React"],
  },
  {
    title: "Back End",
    techArr: ["Node.js", "Python", "Java"],
  },
  {
    title: "Design",
    techArr: ["Figma", "Illustrator", "Sketch"],
  },
];

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h1 className={styles.header}>Skills</h1>
      <div className={styles.skillContainer}>
        {skillsArr.map((stack, key) => {
          return (
            <div key={key} className={styles.stackContainer}>
              <div className={styles.stackTitle}>{stack.title}</div>
              <div className={styles.techContainer}>
                {stack.techArr.map((tech, key) => {
                  return (
                    <div key={key} className={styles.tech}>
                      <SvgIcon className={styles.iconWrapper} iconType={tech} />
                      <div className={styles.name}>{tech}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
