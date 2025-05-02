import fs from "fs"
import path from "path"
import matter from "gray-matter"


const postsDirectory = path.join(process.cwd(), "src/app/posts");

export const getAllPosts = () => {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const filePath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, "utf8");

        // Use gray-matter to parse the post metadata section
        const { data, content } = matter(fileContents);

        console.log("Post Data:", data);
        console.log("Post Content:", content);

        return {
            slug,
            id: data.id,
            title: data.title,
            date: data.date,
            author: data.author,
            authorImage: data.authorImage,
            excerpt: data.excerpt,
            content,
            coverImage: data.coverImage,
            categories: data.categories || [],
            readingTime: Math.ceil(content.split(' ').length / 200)
        };
    });
}
