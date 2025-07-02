"use client"

import { useState, useMemo } from "react"
import PostCard from "./PostCard"
import { Search, Filter } from "lucide-react"

export default function BlogList({ posts }) {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")

    // Get unique categories
    const categories = useMemo(() => {
        const cats = posts.map((post) => post.category)
        return ["all", ...new Set(cats)]
    }, [posts])

    // Filter posts
    const filteredPosts = useMemo(() => {
        return posts.filter((post) => {
            const matchesSearch =
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesCategory = selectedCategory === "all" || post.category === selectedCategory

            return matchesSearch && matchesCategory 
        })
    }, [posts, searchTerm, selectedCategory])

    return (
        <div className="space-y-8">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg focus:outline-none focus:border-[#00d9ff] transition-colors duration-300 text-text-primary placeholder-[#a1a1aa]"
                    />
                </div>

                <div className="flex items-center ">
                    {/* <Filter className="w-5 h-5 text-text-secondary" /> */}
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="bg-dark-lighter border border-[#2a2a2a]  rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-[#00d9ff] transition-colors duration-300"
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category === "all" ? "All Categories" : category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Results count */}
            <div className="text-text-secondary">
                Showing {filteredPosts.length} of {posts.length} articles
            </div>

            {/* Posts grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                    <div key={post.slug} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <PostCard post={post} />
                    </div>
                ))}
            </div>

            {/* No results */}
            {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-text-secondary text-lg">No articles found matching your criteria.</div>
                </div>
            )}
        </div>
    )
}
