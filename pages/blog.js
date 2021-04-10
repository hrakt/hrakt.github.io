import Blog from "../components/Blog/Blog";
import DefaultLayout from "../layouts";

let client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "post",
  });

  return {
    props: {
      posts: data.items,
    },
  };
}

export default function BlogPage({ posts }) {
  return (
    <div>
      <DefaultLayout>
        <Blog posts={posts} />
      </DefaultLayout>
    </div>
  );
}
