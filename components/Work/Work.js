import styles from "../Work/Work.module.scss";
import classNames from "classnames/bind";

const workArr = [
  {
    imgSrc: "/Tillamook.png",
    type: "Website",
    title: "Tillamook",
    description:
      "Worked on redesign project for Tillamook.com. Took care of many for future use by the team of developers. Learned the methods of using storybook components, commerace technologies and improving SEO and Accesibility",
  },
  {
    imgSrc: "/Toyota.png",
    type: "Web App",
    title: "Toyota",
    description:
      "Participated in development of a web experience meant to showcase Toyota's latest model. The panorama experience included many overlay info displays which were created by me.",
  },
  {
    imgSrc: "/GrandNash.png",
    type: "Website",
    title: "Grand + Nash",
    description:
      "Took part in one of my first major agency projects. Worked in an AGILE enviornment alongside designers. Helped in creation of a unique ground up experience for a real estate business",
  },
];

var align;

const Work = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <span>Portfolio</span>
        <h2>Check out few of my works</h2>
      </div>
      {workArr.map((item, key) => {
        key % 2 === 0 ? (align = "left") : (align = "right");
        return (
          <div
            className={classNames(styles["item"], styles[`item__${align}`])}
            key={key}
          >
            <div className={styles["item__textBox"]}>
              <div>{item.type}</div>
              <div>{item.title}</div>
              <div>{item.description}</div>
            </div>
            <div className={styles["item__imageBox"]}>
              <img src={item.imgSrc} width="500" height="250" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Work;
