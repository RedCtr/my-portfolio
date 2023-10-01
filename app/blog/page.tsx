import { BlogPreview } from "@/components/BlogPreview"
import { getAllPostsMeta } from "@/lib/mdx"

export default async function BlogPage() {
    const posts = await getAllPostsMeta("post")
    return (
        <div className="container px-4 mx-auto mt-24">
            <h1 className="text-4xl font-extrabold text-gray-800">Blog</h1>
            <h4 className="mt-2 text-gray-500">
                Thoughts on what I'm building and learning.
            </h4>
            <div className="mt-8 space-y-8">
                {posts.map((post) => (
                    <BlogPreview key={post.slug} post={post} />
                ))}
            </div>
        </div>
    )
}
