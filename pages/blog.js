import Blog from "../components/Blog/Blog";
import DefaultLayout from "../layouts";

export async function getStaticProps() {
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
    console.warn(
      "CONTENTFUL_SPACE_ID or CONTENTFUL_ACCESS_TOKEN is not set — returning empty posts for build."
    );

    return {
      props: {
        posts: [],
      },
    };
  }

  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const data = await client.getEntries({
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
