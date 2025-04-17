import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "The Art of Offline Fashion Storytelling: Weaving Magic into Fabric of Reality",
    paragraph: " Offers immersive, tactile brand experiences digital platforms can't match, boosting engagement and connection in today’s digital world.",
    // paragraph:
    //   "Discover the latest trends, tips, and insights to elevate your online presence and business growth.",
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
    title: "Omni-Channel Sales: The Future of Seamless Customer Experiences.",
    paragraph:
     "Sales unify online and offline experiences,ensuring seamless customer interactions and becoming essential for success in today’s retail landscape.",
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
    title: "Why Online Ads Alone Can’t Capture the Offline Fashion Shopper.",
    paragraph:
      "Online ads offer reach, but miss offline fashion shoppers’ unique needs. Brands need omnichannel strategies to connect, engage, and convert effectively.",
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
