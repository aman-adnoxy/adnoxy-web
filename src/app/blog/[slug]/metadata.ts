import { getPost } from "@/app/lib/posts";
import { Metadata } from "next";


export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "This post does not exist or has been removed.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt || post.content.slice(0, 150),
    openGraph: {
      title: post.title,
      description: post.excerpt || post.content.slice(0, 150),
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: post.coverImage || post.authorImage,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.content.slice(0, 150),
      images: [post.coverImage || post.authorImage],
    },
  };
}