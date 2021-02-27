import Blog from "../components/Blog/Blog";
import DefaultLayout from "../layouts";

export default function BlogPage() {
  return (
    <div>
      <DefaultLayout>
        <Blog />
      </DefaultLayout>
    </div>
  );
}
