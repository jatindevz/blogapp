import PostCard from "./PostCard"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function RecentPosts({ posts }) {
    return (
        <section className="py-20 bg-dark-lighter/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Latest <span className="text-gradient">Insights</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Stay updated with our latest articles on technology, innovation, and the digital future.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {posts.map((post, index) => (
                        <div key={post.slug} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center space-x-2 text-cyan hover:text-purple transition-colors duration-300 group"
                    >
                        <span className="text-lg font-semibold">View All Articles</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>
            </div>
        </section>
    )
}
