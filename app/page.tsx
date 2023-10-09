import { BlogPreview } from '@/components/BlogPreview'
import { About } from '@/components/HeroDelba'
import HeroSection from '@/components/HeroSection'
import { Projects as ProjectComponent } from '@/components/Projects'
import { Contact } from '@/components/sections/Contact'
import { Skills } from '@/components/sections/Skills'
import { Words } from '@/components/sections/Words'
import { PostMeta } from '@/types/post'
// import { getAllPostsMeta } from '@/lib/mdx'
import { allBlogs, allProjects } from 'contentlayer/generated'



export default async function Home() {
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
            {allBlogs.map((post) => (
              <BlogPreview key={post.title} post={post} />
            ))}
          </div>
        </div>

      </div>

      <div id="projects">
        <ProjectComponent projects={allProjects} />
      </div>

      <div id='skills'>
        <Skills />
      </div>

      <div id='testimonials'>
        <Words />
      </div>

      <div id='contactMe'>
        <Contact />
      </div>
    </main>
  )
}
