// components/LazyBlogList.client.tsx
'use client';

import dynamic from 'next/dynamic';
import { Blog } from '@/types/blog';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SingleBlog from '@/components/Blog/SingleBlog';

const LazySingleBlog = dynamic(
  () => import('@/components/Blog/SingleBlog'),
  { 
    loading: () => (
      <div className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3 h-[400px] bg-gray-100 rounded-lg animate-pulse"></div>
    )
  }
);

export default function LazyBlogList({ 
  posts,
  currentPage,
  totalPages 
}: { 
  posts: Blog[];
  currentPage: number;
  totalPages: number;
}) {
  const router = useRouter();

  // Prefetch next page when user scrolls near bottom
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= 
        document.body.offsetHeight - 500 && 
        currentPage < totalPages
      ) {
        router.prefetch(`/blog?page=${currentPage + 1}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage, totalPages, router]);

  return (
    <>
      {posts.map((post, index) => (
        <div key={post.id} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
          {/* Priority load first 3 items */}
          {index < 3 ? (
            <SingleBlog post={post} priority />
          ) : (
            <LazySingleBlog post={post} />
          )}
        </div>
      ))}
    </>
  );
}