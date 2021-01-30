import styles from "./Skills.module.scss";

const skillsArr = [
  {
    title: "Front-End",
    techArr: ["Javascript", "HTML", "CSS"],
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
                      <div className={styles.iconWrapper}></div>
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
