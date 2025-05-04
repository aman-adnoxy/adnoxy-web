import { getAllPosts } from "@/app/lib/posts";
import SingleBlog from "./SingleBlog";
import Link from "next/link";

const Blog = () => {
  // Get all posts and sort by date (newest first)
  const allPosts = getAllPosts().sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  
  // Take only the first 3 posts (latest)
  const latestPosts = allPosts.slice(0, 3);

  return (
    <section
      id="blog"
      className="bg-white-600 dark:bg-bg-color-red-500 pt-16 pb-10"
    >
      <div className="container">
        <h2 
          className="text-[2rem] lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] font-bold text-center text-black mb-10" 
          style={{ fontFamily: 'Plus Jakarta Sans' }}
        >
          Insights and Updates
        </h2>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 font-['Poppins']">
          {latestPosts.map((post) => (
            <div key={post.id} className="w-full">
              <SingleBlog post={post} />
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-12 text-center font-['Poppins']">
         <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-3xl bg-[#a31d1d] px-6 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#a31d1d] hover:scale-105 transform transition"
          >
           See More
           <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;