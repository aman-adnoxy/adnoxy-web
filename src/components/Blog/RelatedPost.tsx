// components/RelatedBlogs.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Blog } from '@/types/blog';

export default function RelatedBlogs({ 
  currentPostId,
  allPosts
}: { 
  currentPostId: string;
  allPosts: Blog[];
}) {
  // Filter out current post and get 3 random posts
  const relatedPosts = allPosts
    .filter(post => post.id !== currentPostId)
    .sort(() => 0.5 - Math.random()) // Shuffle array
    .slice(0, 3); // Take first 3

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-16 border-t border-gray-200 pt-12">
      <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map(post => (
          <article key={post.id} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="mb-4 overflow-hidden rounded-lg">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={400}
                  height={225}
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#a31d1d] transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
              <div className="mt-3 flex items-center text-sm text-gray-500">
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                <span className="mx-2">•</span>
                <span>{post.readingTime} min read</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}