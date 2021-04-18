import DefaultLayout from "../../layouts/index";
import BlogPost from "../../components/Blog/BlogPost";
import { createClient } from "contentful";

export async function getAllBlogPosts() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const entries = await client.getEntries({
    content_type: "post",
  });

  return entries?.items?.map((item) => {
    const fields = item.fields;
    return {
      slug: fields.slug,
    };
  });
}

export async function getSingleBlogPost(slug) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const entry = await client.getEntries({
    content_type: "post",
    limit: 1,
    "fields.slug[in]": slug,
  });

  return entry?.items?.map((item) => {
    return item;
  })[0];
}

export const getStaticPaths = async () => {
  const posts = await getAllBlogPosts();
  const paths = posts?.map(({ slug }) => ({ params: { slug } })) ?? [];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const post = await getSingleBlogPost(slug);

  return {
    props: { post },
  };
};

export default function Post({ post }) {
  return (
    <div>
      <DefaultLayout>
        <BlogPost post={post} />
      </DefaultLayout>
    </div>
  );
}
