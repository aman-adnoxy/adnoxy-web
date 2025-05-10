// type Author = {
//   name: string;
//   image: string;
//   designation: string;
// };

export type Blog = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;       // ISO date string (initial publish)
  updatedAt?: string;        // ISO date string (last update - optional)
  author: string;
  authorImage: string; // Optional author image
  content: string;
  tags: string[];
  readingTime: number;
  metadata?: {
    keywords?: string[];
    ogImage?: string;
    canonicalUrl?: string;
  };
  status?: 'draft' | 'published'; // Optional publication status
};
