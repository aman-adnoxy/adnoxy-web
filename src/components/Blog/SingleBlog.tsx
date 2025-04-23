"use client";

import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl dark:bg-dark dark:hover:shadow-gray-dark transition-all duration-300"
    >
      {/* Blog Image with Hover Zoom */}
      <Link href="/blog-details" className="relative block aspect-[37/22] w-full overflow-hidden rounded-lg">
        <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-gray-300 px-4 py-2 text-sm font-semibold capitalize text-black hover:bg-gray-700 transition duration-300">
          {tags[0]}
        </span>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
          <Image src={image} alt="image" fill className="object-cover rounded-lg transition-transform duration-500" />
        </motion.div>
      </Link>

      {/* Blog Content */}
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <Link
            href="/blog-details"
            className="mb-4 block text-xl font-bold text-black dark:text-white hover:text-[#a31d1d] transition duration-300 sm:text-2xl"
          >
            {title}
          </Link>
        </h3>

        <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
          {paragraph}
        </p>

        {/* Author & Date Info */}
        <div className="flex items-center">
          <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mr-4 relative h-10 w-10 overflow-hidden rounded-full"
            >
              <Image src={author.image} alt="author" fill />
            </motion.div>
            <div>
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                By {author.name}
              </h4>
              <p className="text-xs text-body-color">{author.designation}</p>
            </div>
          </div>
          <div>
            <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">Date</h4>
            <p className="text-xs text-body-color">{publishDate}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleBlog;
