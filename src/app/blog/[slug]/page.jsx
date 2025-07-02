import { getPostBySlug, getAllPosts } from "@/lib/posts"
import { notFound } from "next/navigation"
import BlogPost from "@/components/BlogPost"

export async function generateStaticParams() {
    const posts = await getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }) {
    // Destructure slug from params first
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        return {
            title: "Post Not Found",
        }
    }

    return {
        title: `${post.title} - FutureBlog`,
        description: post.excerpt,
        keywords: post.tags?.join(", "),
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author || 'FutureBlog'],
        },
    }
}

export default async function BlogPostPage({ params }) {
    // Destructure slug from params first
    const { slug } = await params
    const post = await getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    return <BlogPost post={post} />
}