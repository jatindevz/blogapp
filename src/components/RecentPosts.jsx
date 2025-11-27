"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PostCard from "./PostCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

export default function RecentPosts({ posts }) {
    const containerRef = useRef(null);
    const postsContainerRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Calculate total scroll distance based on content width
            const postsContainer = postsContainerRef.current;
            const scrollWidth = postsContainer.scrollWidth - postsContainer.offsetWidth;

            // Create the main timeline with pinning
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: " top",
                    end: () => `+=${scrollWidth + 1000}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    // markers: true

                }
            });

            // First, pin the header at the top
            tl.to(headerRef.current, {
                y: 0,
                // duration: 1
            }, 0);

            // Then animate the posts horizontally
            tl.to(postsContainer, {
                x: () => -scrollWidth,
                // ease: "none",
                // duration: 1
            }, 0);

            // Stagger fade-in animation for individual post cards
            gsap.fromTo(".post-item",
                {
                    opacity: 0,
                    y: 60,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: postsContainer,
                        start: "left 80%",
                        end: "left 20%",
                        toggleActions: "play none none reverse",
                    }
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, [posts]);

    return (
        <section className="py-20 bg-dark-lighter/30">
            <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header section - will be pinned at top */}
                <div ref={headerRef} className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Latest <span className="text-gradient">Insights</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Stay updated with our latest articles on technology, innovation, and the digital future.
                    </p>
                </div>

                {/* Posts section - will scroll horizontally below pinned header */}
                <div className="parent overflow-hidden">
                    <div
                        ref={postsContainerRef}
                        className="child flex gap-8 md:gap-10 py-4"
                        style={{ willChange: "transform" }}
                    >
                        {posts.map((post) => (
                            <div
                                key={post.slug}
                                className="post-item flex-shrink-0 w-80 md:w-96 opacity-0"
                            >
                                <PostCard post={post} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All link - will scroll normally */}
                <div className="text-center mt-12">
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
    );
}