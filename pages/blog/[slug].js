import DefaultLayout from "../../layouts/index";
import BlogPost from "../../components/Blog/BlogPost";

let client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: "post",
  });

  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });

  return {
    props: {
      post: data.items[0],
    },
  };
}

export default function Post({ post }) {
  return (
    <div>
      <DefaultLayout>
        <BlogPost post={post} />
      </DefaultLayout>
    </div>
  );
}
