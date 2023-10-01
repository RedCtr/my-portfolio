import { Button } from "@/components/Button"
import { LikeButton } from "@/components/LikeButton"
import MdxComponent from "@/components/MdxComponent"
import { getPostBySlug } from "@/lib/mdx"

import { format, parseISO } from "date-fns"
import Image from "next/image"


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

export default async function PostPage({ params }: {
    params: {
        slug: string
    }
}) {
    const { code, meta } = await getPostBySlug(params.slug)

    return (
        <div className="container max-w-3xl px-4 mx-auto mt-36">
            <h1 className="text-2xl font-extrabold md:text-3xl">{meta.title}</h1>

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

                <div>{format(parseISO(meta.publishedAt), "MMMM dd, yyyy")}</div>
            </div>

            <div className="mt-12">
                <MdxComponent code={code} />
            </div>

            <div className="flex justify-center mt-16 space-x-8">
                {meta.source ? (
                    <Button href={meta.source} target="_blank">
                        View Source Code
                    </Button>
                ) : null}
                <LikeButton id={meta.slug} />
            </div>
        </div>
    )
}
