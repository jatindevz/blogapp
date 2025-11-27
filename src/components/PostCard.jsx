import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function PostCard({ post }) {
    return (
        <article className=" rounded-lg border border-[#2a2a2a]/30 p-6 transition-all duration-300 group  w-sm">
            {/* Featured Image */}
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                    src={"/futureofai.jpg?height=400&width=600"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-hp/20 text-hp text-xs font-semibold rounded-full backdrop-blur-sm">
                        {post.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold group-hover:text-gradient transition-all duration-300 line-clamp-2">
                    {post.title}
                </h3>

                <p className="text-text-secondary line-clamp-3 leading-relaxed">{post.excerpt}</p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-text-secondary">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>

                {/* Read More Link */}
                <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-cyan hover:text-purple transition-colors duration-300 group/link"
                >
                    <span className="font-semibold">Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
            </div>
        </article>
    )
}
