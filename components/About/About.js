import styles from "../About/About.module.scss";

const About = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["image__container"]}>
        <div className={styles["image__box"]}>
          <img src="Portrait.jpg" alt="Portrait" width="390" height="520" />
        </div>
      </div>
      <div className={styles["text__container"]}>
        <h1>About me</h1>
        <p>
          Experienced Web Developer with a demonstrated history of work in the
          web agency and tech startup industry. Always curious and eager about
          gaining more knowledge in modern-day web and software technologies and
          beyond, to create eye-catching experiences and solve real-world
          problems.
        </p>
        <a href="Resume.docx" download>
          Download my resume
        </a>
        <h3>Contact me here!</h3>
        <p>
          Email: <a href="/">hello@hrak.dev</a>
        </p>

        <p>
          Number: <a href="/">000-000-0000</a>
        </p>
      </div>
    </div>
  );
};

export default About;
