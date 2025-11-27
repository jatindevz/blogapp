"use client"

import { useState, useMemo, useRef, useEffect, useCallback } from "react"
import PostCard from "./PostCard"
import { Search, Filter } from "lucide-react"
import { gsap } from "gsap"

export default function BlogList({ posts }) {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const containerRef = useRef(null)
    const searchRef = useRef(null)
    const filterRef = useRef(null)
    const resultsRef = useRef(null)
    const gridRef = useRef(null)

    // Get unique categories
    const categories = useMemo(() => {
        const cats = posts.map((post) => post.category)
        return ["all", ...new Set(cats)]
    }, [posts])

    // Define animateGridItems with useCallback to avoid recreation on every render
    const animateGridItems = useCallback(() => {
        const gridItems = gridRef.current?.children

        if (gridItems && gridItems.length > 0) {
            gsap.killTweensOf(gridItems)

            gsap.set(gridItems, {
                opacity: 0,
                y: 60,
                scale: 0.8,
                rotationY: 15
            })

            gsap.to(gridItems, {
                opacity: 1,
                y: 0,
                scale: 1,
                rotationY: 0,
                duration: 0.8,
                stagger: {
                    amount: 0.6,
                    from: "start",
                    grid: "auto",
                    ease: "back.out(1.3)"
                },
                ease: "power2.out"
            })
        }
    }, [])

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

    // Animate when filtered posts change
    useEffect(() => {
        if (filteredPosts.length > 0) {
            animateGridItems()
        }
    }, [filteredPosts, animateGridItems])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Master timeline for initial animation
            const masterTL = gsap.timeline()

            // Animate search and filter
            masterTL
                .fromTo(searchRef.current,
                    {
                        opacity: 0,
                        x: -50,
                        scale: 0.8
                    },
                    {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: "back.out(1.7)"
                    }
                )
                .fromTo(filterRef.current,
                    {
                        opacity: 0,
                        x: 50,
                        scale: 0.8
                    },
                    {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: "back.out(1.7)"
                    },
                    "-=0.5"
                )
                .fromTo(resultsRef.current,
                    {
                        opacity: 0,
                        y: 30
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out"
                    },
                    "-=0.3"
                )

            // Animate initial grid items after a small delay to let the search/filter animate first
            setTimeout(() => {
                animateGridItems()
            }, 300)
        }, containerRef)

        return () => ctx.revert()
    }, [animateGridItems])

    const handleSearchFocus = () => {
        gsap.to(searchRef.current, {
            scale: 1.02,
            boxShadow: "0 0 30px rgba(0, 217, 255, 0.3)",
            duration: 0.3,
            ease: "power2.out"
        })
    }

    const handleSearchBlur = () => {
        gsap.to(searchRef.current, {
            scale: 1,
            boxShadow: "none",
            duration: 0.3,
            ease: "power2.out"
        })
    }

    const handleFilterHover = (isHover) => {
        gsap.to(filterRef.current, {
            scale: isHover ? 1.05 : 1,
            y: isHover ? -2 : 0,
            duration: 0.3,
            ease: "power2.out"
        })
    }

    return (
        <div ref={containerRef} className="space-y-8">
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div
                    ref={searchRef}
                    className="relative flex-1 max-w-md"
                    onFocus={handleSearchFocus}
                    onBlur={handleSearchBlur}
                >
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg focus:outline-none focus:border-[#00d9ff] transition-colors duration-300 text-text-primary placeholder-[#a1a1aa] backdrop-blur-sm"
                    />
                </div>

                <div
                    ref={filterRef}
                    className="flex items-center"
                    onMouseEnter={() => handleFilterHover(true)}
                    onMouseLeave={() => handleFilterHover(false)}
                >
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="bg-dark-lighter/80 backdrop-blur-xl border border-cyan/30 rounded-xl px-4 py-3.5 text-text-primary focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:border-cyan transition-all duration-300 cursor-pointer shadow-lg shadow-cyan/10 hover:shadow-cyan/20 hover:border-cyan/50 appearance-none"
                        style={{
                            background: "linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(39, 39, 39, 0.6) 100%)",
                            backdropFilter: "blur(20px)",
                        }}
                    >
                        {categories.map((category) => (
                            <option
                                key={category}
                                value={category}
                                className="bg-dark-lighter  py-2 text-zinc-950 "
                                style={{ lineHeight: "1.5rem" }}
                            >
                                {category === "all" ? "All Categories" : category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Results count */}
            <div ref={resultsRef} className="text-text-secondary text-lg font-medium">
                Showing {filteredPosts.length} of {posts.length} articles
            </div>

            {/* Posts grid */}
            <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                    <div key={post.slug} className="post-card-wrapper">
                        <PostCard post={post} />
                    </div>
                ))}
            </div>

            {/* No results */}
            {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                    <div className="text-text-secondary text-xl mb-4">🔍 No articles found</div>
                    <div className="text-text-secondary/70">Try adjusting your search or filter criteria</div>
                </div>
            )}
        </div>
    )
}