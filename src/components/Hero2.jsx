"use client"
import Link from "next/link"
import { useRef, useEffect } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { gsap } from "gsap"
import { motion } from "framer-motion"

const ShinyButton = ({ children, className = "", ...props }) => {
    return (
        <motion.button
            className={` ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {/* Animated shine effect */}
            <div className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />

            {/* Content */}
            <div className="relative flex items-center space-x-2">
                {children}
            </div>
        </motion.button>
    )
}

export default function Hero() {
    const sectionRef = useRef(null)
    const badgeRef = useRef(null)
    const headingRef = useRef(null)
    const subtitleRef = useRef(null)
    const buttonsRef = useRef(null)
    const shineRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Shine animation for the badge
            gsap.to(shineRef.current, {
                x: "200%",
                duration: 2,
                ease: "power2.inOut",
                repeat: -1,
                repeatDelay: 3
            })

            // Staggered entrance animation
            const tl = gsap.timeline()

            tl.fromTo(badgeRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
            )
                .fromTo(headingRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                    "-=0.3"
                )
                .fromTo(subtitleRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                    "-=0.5"
                )
                .fromTo(buttonsRef.current,
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
                    "-=0.5"
                )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Shiny "Welcome to the Future" badge */}
                    <div className="mb-8 flex justify-center">
                        <div
                            ref={badgeRef}
                            className="relative inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full border border-cyan/20 backdrop-blur-sm overflow-hidden"
                        >
                            {/* Shiny effect overlay */}
                            <div
                                ref={shineRef}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan/30 to-transparent transform -translate-x-full"
                                style={{
                                    transform: 'translateX(-100%)',
                                    background: 'linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.3), transparent)'
                                }}
                            />

                            <Sparkles className="w-4 h-4 text-cyan relative z-10" />
                            <span className="text-sm font-medium text-cyan relative z-10">Welcome to the Future</span>
                        </div>
                    </div>

                    {/* Main heading */}
                    <h1
                        ref={headingRef}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                    >
                        Exploring the <span className="text-gradient">Digital Frontier</span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        ref={subtitleRef}
                        className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        Dive into the latest trends in technology, AI, and innovation. Discover insights that shape tomorrow's
                        digital landscape.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        ref={buttonsRef}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <ShinyButton>

                        <Link
                            href="/blog"
                            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-cyan to-purple px-8 py-4 rounded-full text-dark font-semibold hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 transform hover:scale-105"
                            >
                            <span>Explore Articles</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                        </ShinyButton>
                        <ShinyButton>
                        <Link
                            href="/about"
                            className="inline-flex items-center space-x-2 glass-card px-8 py-4 rounded-full text-text-primary hover:bg-dark-lighter/70 transition-all duration-300 border border-dark-border/50 hover:border-cyan/30"
                        >
                            <span>Learn More</span>
                            </Link>
                        </ShinyButton>
                    </div>
                </div>
            </div>
        </section>
    )
}