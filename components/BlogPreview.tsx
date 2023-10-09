import Link from "next/link"
import type { PostMeta } from "../types/post"
import cx from "clsx"
import { FOCUS_VISIBLE_OUTLINE } from "@/lib/constants"
import type { Blog } from 'contentlayer/generated'

export const BlogPreview = ({ post }: { post: Blog }) => {
    return (
        <div key={post.title}>
            <Link
                className={cx("text-gray-800 group block", FOCUS_VISIBLE_OUTLINE)}
                href={`/blog/${post.slug}`}>

                <h2 className="text-lg font-bold group-hover:text-sky-500">
                    {post.title}
                </h2>
                <p className="text-gray-800 line-clamp-2">{post.description}</p>

            </Link>
        </div>
    )
}
