import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Blog } from "@/types/blog";


const postsDirectory = path.join(process.cwd(), "src/app/posts");

function parseDate(dateString?: string): string {
  if (!dateString) return new Date().toISOString();
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date');
    }
    return date.toISOString();
  } catch (error) {
    console.warn(`Invalid date: ${dateString}. Using current date instead.`);
    return new Date().toISOString();
  }
}

// Shared parsing logic
function parseMarkdownFile(fileName: string): Blog {
  const slug = fileName.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const wordCount = content.split(/\s+/).length;
  
  return {
    id: data.id || slug,
    slug,
    title: data.title,
    excerpt: data.excerpt,
    coverImage: data.coverImage || '/images/default-cover.jpg',
    publishedAt: parseDate(data.date || data.publishedAt),
    updatedAt: data.updatedAt ? parseDate(data.updatedAt) : undefined,
    author: data.author || 'ADNOXY Team',
    authorImage: data.authorImage,
    content,
    tags: data.tags || [],
    readingTime: Math.ceil(wordCount / 200),
    metadata: {
      keywords: data.keywords || [],
      ogImage: data.ogImage || data.coverImage,
    },
  };
}

export function getAllPosts(): Blog[] {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .map(parseMarkdownFile)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

// Get single post by slug (for detail pages)
export function getPost(slug: string) {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug);
}
  
  // Optional: Get posts by tag/category
export function getPostsByTag(tag: string): Blog[] {
    return getAllPosts().filter(post => post.tags.includes(tag));
}