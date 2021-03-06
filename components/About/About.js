import styles from "../About/About.module.scss";

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image__container}>
          <div className={styles.image__box}>
            <img src="Portrait.jpg" alt="Portrait" className={styles.image} />
          </div>
        </div>
        <div className={styles.seperator} />
        <div className={styles.text__container}>
          <div className={styles.text__paragraph}>
            <h1>About me</h1>
            <p>
              Experienced Web Developer with a demonstrated history of work in
              the web agency and tech startup industry. Always curious and eager
              about gaining more knowledge in modern-day web and software
              technologies and beyond, to create eye-catching experiences and
              solve real-world problems.
            </p>

            <a href="Resume.docx" download>
              Download my resume
            </a>
            <h3>Contact me here!</h3>
            <p>
              <a href="mailto:hello@hrak.dev">Email Me!</a>
            </p>

            <p>
              Number: <a href="tel:818-658-4368">818-658-4368</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
