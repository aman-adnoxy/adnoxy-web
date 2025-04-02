import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Best UI components for modern websites",
    paragraph:
      "Discover the latest trends, tips, and insights to elevate your online presence and business growth.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Aman",
      image: "/images/blog/author-011.jpg",
      designation: "",
    },
    tags: ["Fashion"],
    


    publishDate: "2025",
    
  },
  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    paragraph:
     "Discover the latest trends, tips, and insights to elevate your online presence and business growth.",
    image: "/images/blog/blog-022.jpg",
    author: {
      name: "Naman Sanghi",
      image: "/images/blog/author-02.png",
      designation: "",
    },
    tags: ["Technology"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Discover the latest trends, tips, and insights to elevate your online presence and business growth.",
    image: "/images/blog/blog-033.jpg",
    author: {
      name: "Nitin Goyal",
      image: "/images/blog/author-03.jpg",
      designation: "",
    },
    tags: ["Marketing"],
    publishDate: "2025",
  },
];
export default blogData;
