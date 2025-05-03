import { getAllPosts } from "@/app/lib/posts";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

const Blog = () => {
  const posts = getAllPosts();

  return (
    <section
      id="blog"
      className="bg-white-600 dark:bg-bg-color-red-500 pt-16"

    >
      <div className="container">
        <h2 className="text-[2rem] lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] font-bold text-center text-black mb-10" style={{ fontFamily: 'Plus Jakarta Sans' }}>Insights and Updates</h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 font-['Poppins']">
          {posts.map((post) => (
            <div key={post.id} className="w-full">
              <SingleBlog post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
