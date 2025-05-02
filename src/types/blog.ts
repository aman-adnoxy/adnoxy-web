// type Author = {
//   name: string;
//   image: string;
//   designation: string;
// };

export type Blog = {
  id: number;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  coverImage: string;
  categories: string[];
  author: string;
  authorImage: string;
  readingTime?: number;
  year?: string;
  month?: string;
};
