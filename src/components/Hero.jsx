import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
    return (
        <section className="relative py-20 lg:py-32 overflow-hidden">
         
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center animate-slide-up">
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-8">
                        <Sparkles className="w-4 h-4 text-cyan" />
                        <span className="text-sm text-text-secondary">Welcome to the Future</span>
                    </div>

                    {/* Main heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        Exploring the <span className="text-gradient">Digital Frontier</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
                        Dive into the latest trends in technology, AI, and innovation. Discover insights that shape tomorrow's
                        digital landscape.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/blog"
                            className="group inline-flex items-center space-x-2 border-gradient-to-r from-[#00d9ff] to-[#8b5cf6] px-8 py-4 rounded-full text-dark font-semibold hover:shadow-lg hover:shadow-[#00d9ff]/25 transition-all duration-300 transform hover:scale-105"
                        >
                            <span>Explore Articles</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>

                        <Link
                            href="/about"
                            className="inline-flex items-center space-x-2 glass-card px-8 py-4 rounded-full text-text-primary hover:bg-dark-lighter/70 transition-all duration-300 border border-dark-border/50 hover:border-cyan/30"
                        >
                            <span>Learn More</span>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    )
}
