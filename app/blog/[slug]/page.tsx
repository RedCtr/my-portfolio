import { Button } from "@/components/Button"
import { LikeButton } from "@/components/LikeButton"
import MdxComponent from "@/components/MdxComponent"
import { getPostBySlug } from "@/lib/mdx"

import { format, parseISO } from "date-fns"
import Image from "next/image"
import { Projects, allDocuments } from 'contentlayer/generated'


// export const getStaticPaths = () => {
//     const posts = getAllPostsMeta()
//     const paths = posts?.map(({ slug }) => ({ params: { slug } })) ?? []

//     return {
//         paths: paths,
//         // Return 404 page if path is not returned by getStaticPaths
//         fallback: false,
//     }
// }

// export const getStaticProps: GetStaticProps<Post> = async (context) => {
//     const slug = context.params?.slug as string
//     const post = await getPostBySlug(slug)

//     return { props: post }
// }

// Return a list of `params` to populate the [slug] dynamic segment
export function generateStaticParams() {
    return allDocuments.map((doc) => ({
        slug: doc.slug
    }))

}

type ParamsProps = {
    params: {
        slug: string
    }
}
export default async function PostPage({ params }: ParamsProps) {
    const post = allDocuments.find((doc) => doc.slug === params.slug)!
    const project = post as Projects

    return (
        <div className="container max-w-3xl px-4 mx-auto mt-36">
            <h1 className="text-2xl font-extrabold md:text-3xl">{post.title}</h1>

            <div className="flex items-center mt-4 space-x-2 text-gray-500">
                <Image
                    alt=""
                    src="/avatar.jpg"
                    height={24}
                    width={24}
                    className="rounded-full"
                />

                <div>Delba de Oliveira</div>

                <div className="text-gray-300">&middot;</div>

                <div>{format(parseISO(post.publishedAt), "MMMM dd, yyyy")}</div>
            </div>

            <div className="mt-12">
                <MdxComponent code={post.body.code} />
            </div>

            <div className="flex justify-center mt-16 space-x-8">
                {project.source ? (
                    <Button href={project.source} target="_blank">
                        View Source Code
                    </Button>
                ) : null}
                <LikeButton id={project.slug} />
            </div>
        </div>
    )
}
