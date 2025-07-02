import { getAllPosts } from "@/lib/posts"
import BlogList from "@/components/BlogList"

export const metadata = {
    title: "Blog - FutureBlog",
    description: "Explore our latest articles on technology, AI, and digital innovation.",
}

export default async function BlogPage() {
    const posts = await getAllPosts()

    return (
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-slide-up">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Our <span className="text-gradient">Blog</span>
                    </h1>
                    <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">
                        Discover insights, tutorials, and thoughts on the latest in technology and innovation.
                    </p>
                </div>

                <BlogList posts={posts} />
            </div>
        </div>
    )
}
