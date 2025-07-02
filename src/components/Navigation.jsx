"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search } from "lucide-react"

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/blog", label: "Blog" },
        { href: "/about", label: "About" },
    ]

    return (
        <nav className="sticky top-0 z-50 glass-card border-b border-dark-border/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan to-purple rounded-lg flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                            <span className="text-dark font-bold text-sm">FB</span>
                        </div>
                        <span className="text-xl font-bold text-gradient">FutureBlog</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-text-secondary hover:text-cyan transition-colors duration-300 relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan to-purple group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}

                        <Link href="/blog" className="p-2 text-text-secondary hover:text-cyan transition-colors duration-300">
                            <Search size={20} />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-text-secondary hover:text-cyan transition-colors duration-300"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 animate-fade-in">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-text-secondary hover:text-cyan transition-colors duration-300 py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
