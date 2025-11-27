"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

// Shiny Button Component
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
    return (
        <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Shiny "Welcome to the Future" badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 flex justify-center"
                    >
                        <div className="relative overflow-hidden rounded-full px-6 py-3 font-medium backdrop-blur-sm border border-cyan/20  inline-flex items-center space-x-2 bg-dark-lighter/50">
                            <Sparkles className="w-4 h-4 text-cyan" />
                            <span className="text-sm font-medium text-cyan">Welcome to the Future</span>
                        </div>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                    >
                        Exploring the <span className="text-gradient">Digital Frontier</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        Dive into the latest trends in technology, AI, and innovation. Discover insights that shape tomorrow's
                        digital landscape.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <ShinyButton >

                        <Link
                            href="/blog"
                            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-cyan to-purple px-8 py-4 rounded-full text-dark font-semibold hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 transform hover:scale-105"
                            >
                            <span>Explore Articles</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                            </ShinyButton>
                        <ShinyButton >
                        <Link
                            href="/about"
                            className="inline-flex items-center space-x-2 glass-card px-8 py-4 rounded-full text-text-primary hover:bg-dark-lighter/70 transition-all duration-300 border border-dark-border/50 hover:border-cyan/30"
                        >
                            <span>Learn More</span>
                            </Link>
                        </ShinyButton>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}