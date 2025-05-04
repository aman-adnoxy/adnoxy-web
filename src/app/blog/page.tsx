// app/blog/page.tsx
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getAllPosts } from "../lib/posts";
import Link from 'next/link';
import LazyBlogList from "@/components/Blog/LazyBlogList.client";

export const metadata = {
  title: "Blog Page | ADNOXY",
  description: "This is Blog Page of ADNOXY",
};

type Props = {
  searchParams?: {
    page?: string;
  };
};

export default async function BlogPage({ searchParams }: Props) {
  // Pagination config
  const postsPerPage = 10;
  const currentPage = Number(searchParams.page) || 1;
  const allPosts = getAllPosts();
  
  // Calculate pagination
  const startIndex = (currentPage - 1) * postsPerPage;
  const visiblePosts = allPosts.slice(startIndex, startIndex + postsPerPage);
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, currentPage + 2);

      if (startPage > 1) pages.push(1);
      if (startPage > 2) pages.push('...');
      
      for (let i = startPage; i <= endPage; i++) pages.push(i);
      
      if (endPage < totalPages - 1) pages.push('...');
      if (endPage < totalPages) pages.push(totalPages);
    }

    return pages;
  };

  return (
    <>
      <div style={{ fontFamily: 'Plus Jakarta Sans' }}>
        <Breadcrumb
          pageName="Blogs"
          description="Explore in-depth articles, expert tips, and the latest industry trends."
        />
      </div>

      <section className="py-16">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-flex-start gap-y-5">
            <LazyBlogList 
              posts={visiblePosts} 
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </div>

          {totalPages > 1 && (
            <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
              <div className="w-full px-4">
                <ul className="flex items-center justify-center pt-8">
                  <li className="mx-1">
                    <Link
                      href={`/blog?page=${currentPage - 1}`}
                      className={`flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-[#a31d1d] transition hover:bg-[#a31d1d] hover:text-white ${
                        currentPage === 1 ? 'pointer-events-none opacity-50' : ''
                      }`}
                      prefetch={currentPage > 1} // Prefetch previous page if not first
                    >
                      Prev
                    </Link>
                  </li>

                  {getPageNumbers().map((page, index) => (
                    <li key={index} className="mx-1">
                      {page === '...' ? (
                        <span className="flex h-9 min-w-[36px] items-center justify-center px-4 text-sm">
                          ...
                        </span>
                      ) : (
                        <Link
                          href={`/blog?page=${page}`}
                          className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
                            currentPage === page
                              ? 'bg-[#a31d1d] text-white'
                              : 'bg-body-color bg-opacity-[15%] text-[#a31d1d] hover:bg-[#a31d1d] hover:text-white'
                          }`}
                          prefetch={Math.abs(Number(page) - currentPage) <= 2} // Prefetch nearby pages
                        >
                          {page}
                        </Link>
                      )}
                    </li>
                  ))}

                  <li className="mx-1">
                    <Link
                      href={`/blog?page=${currentPage + 1}`}
                      className={`flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-[#a31d1d] transition hover:bg-[#a31d1d] hover:text-white ${
                        currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
                      }`}
                      prefetch={currentPage < totalPages} // Always prefetch next page
                    >
                      Next
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}