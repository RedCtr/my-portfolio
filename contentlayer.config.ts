import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkSlug from 'remark-slug'
import remarkGfm from 'remark-gfm'

const computedFields: ComputedFields = {
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    }
}

const Projects = defineDocumentType(() => ({
    name: "Projects",
    filePathPattern: 'projects/*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        publishedAt: { type: 'string', required: true },
        category: { type: 'string', default: 'project' },
        image: { type: 'string', required: true },
        source: { type: 'string', required: false }

    },
    computedFields
}))

const Blog = defineDocumentType(() => ({
    name: "Blog",
    filePathPattern: 'blog/*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        description: { type: 'string', required: true },
        publishedAt: { type: 'string', required: true },
        category: { type: 'string', default: 'blog' }

    },
    computedFields
}))

const contentLayerConfig = makeSource({
    contentDirPath: 'posts',
    documentTypes: [Projects, Blog],
    mdx: {
        remarkPlugins: [],
        rehypePlugins: [remarkSlug]
    }

})

export default contentLayerConfig