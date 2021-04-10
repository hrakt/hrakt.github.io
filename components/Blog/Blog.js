import styles from "./Blog.module.scss";

const Blog = ({ posts }) => {
  return (
    <div className={styles.blog}>
      <h1>Recent Posts</h1>
      <div className={styles.posts}>
        {posts.map((post, id) => {
          var d = new Date(post.fields.date);
          return (
            <a href={`/blog/${post.fields.slug}`}>
              <div id={id} className={styles.post}>
                <p className={styles.date}>
                  {d.getDate() +
                    " / " +
                    (d.getMonth() + 1) +
                    " / " +
                    d.getFullYear()}
                </p>
                <h3 className={styles.postHeader}>{post.fields.title}</h3>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
