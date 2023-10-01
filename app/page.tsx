import { BlogPreview } from '@/components/BlogPreview'
import { About } from '@/components/HeroDelba'
import HeroSection from '@/components/HeroSection'
import { Projects } from '@/components/Projects'
import { getAllPostsMeta } from '@/lib/mdx'
import { PostMeta } from '@/types/post'


const getPostAndProjectData = async () => {
  const posts = await getAllPostsMeta("post")
  const projects = await getAllPostsMeta("project")
  return {
    posts,
    projects
  }

}

export default async function Home() {
  const { posts, projects } = await getPostAndProjectData()
  return (
    <main className=" space-y-8 lg:space-y-16">
      <div id='Hero'>
        <About />

        {/* <HeroSection /> */}
      </div>

      <div className='blog'>
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold text-gray-800">Recent Posts</h2>
          <h4 className="mt-2 text-gray-500">
            Thoughts on what I'm building and learning.
          </h4>
          <div className="mt-6 space-y-8">
            {posts.map((post: PostMeta) => (
              <BlogPreview key={post.slug} post={post} />
            ))}
          </div>
        </div>

      </div>

      <div id="projects">
        <Projects projects={projects} />
      </div>
    </main>
  )
}
