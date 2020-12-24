import styles from "../Work/Work.module.scss";

const workArr = [
  {
    type: "Website",
    title: "Tillamook",
    description:
      "Worked on a project creating a redesign for Tillamook.com. Took resposibility of getting many of the smaller components built and delivered to the team of developers. Additionally, learned the methods of using a storybook components, commerace technologies and way of improving SEO and Accesibility",
  },
];

const Work = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <p>Portfolio</p>
        <p>Check out few of my works</p>
      </div>
      {workArr.map((item, key) => {
        return (
          <div className={styles["item"]} key={key}>
            <p>{item.type}</p>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
