import Link from "next/link"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-md mx-auto text-center px-4">
                <div className="animate-slide-up">
                    {/* 404 Animation */}
                    <div className="text-8xl font-bold text-gradient mb-4">404</div>

                    <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>

                    <p className="text-text-secondary mb-8 leading-relaxed">
                        The page you're looking for doesn't exist or has been moved to another location.
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan to-purple px-6 py-3 rounded-lg text-dark font-semibold hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 transform hover:scale-105"
                        >
                            <Home className="w-4 h-4" />
                            <span>Go Home</span>
                        </Link>

                        <Link
                            href="/blog"
                            className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-lg text-text-primary hover:bg-dark-lighter/70 transition-all duration-300 border border-dark-border/50 hover:border-cyan/30"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Browse Blog</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
