import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styles from "./BlogPost.module.scss";
import Button from "../Button/index.js";

const BlogPost = ({ post }) => {
  console.log(post);
  return (
    <div className={styles.post}>
      <h1>{post.fields.title}</h1>
      <p>{post.fields.date}</p>
      <div className={styles.content}>
        {documentToReactComponents(post.fields.body)}
      </div>
      <Button link="/blog" className={styles.button} theme="grey">
        Back to Blog
      </Button>
    </div>
  );
};

export default BlogPost;
