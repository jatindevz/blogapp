"use client"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Facebook, Linkedin } from "lucide-react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import ShinyButton from "./ui/shiny-button"

export default function BlogPost({ post }) {
    const backButtonRef = useRef(null)
    const articleRef = useRef(null)



    useEffect(() => {
        const ctx = gsap.context(() => {
            // Master timeline
            const masterTL = gsap.timeline()

            // Back button animation
            masterTL.fromTo(backButtonRef.current,
                {
                    opacity: 0,
                    x: -30
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "back.out(1.7)"
                }
            )


        }, articleRef)

        return () => ctx.revert()
    }, [])

    const handleShare = (platform) => {
        const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
        const title = post.title

        const shareUrls = {
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
        }

        if (shareUrls[platform]) {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400')
        }
    }



    return (
        <article ref={articleRef} className="min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back button */}
                <ShinyButton>

                <Link
                    ref={backButtonRef}
                    href="/blog"
                    className="inline-flex items-center space-x-2 text-cyan hover:text-[#8b5cf6] transition-colors duration-300 mb-8 group glass-card px-4 py-2 rounded-full border border-cyan/20 backdrop-blur-sm "
                    >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                    <span>Back to Blog</span>
                </Link>
                    </ShinyButton>

                {/* Header */}
                <header className="mb-12 animate-slide-up">
                    <div className="mb-6">
                        <span className="px-3 py-1 bg-cyan/20 text-cyan text-sm font-semibold rounded-full">{post.category}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

                    <p className="text-xl text-text-secondary mb-8 leading-relaxed">{post.excerpt}</p>

                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-6 text-text-secondary mb-8">
                        <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    {/* Featured image */}
                    <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
                        <Image
                            src={"/futureofai.jpg?height=400&width=800"}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
                    </div>
                </header>

                {/* Content */}
                <div className="prose prose-lg prose-invert max-w-none animate-fade-in">
                    <div className="glass-card p-8 md:p-12">
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </div>

                {/* Tags */}
                {post.tags && (
                    <div className="mt-12 animate-fade-in">
                        <h3 className="text-lg font-semibold mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-dark-lighter border border-dark-border rounded-full text-sm text-text-secondary hover:border-cyan/30 transition-colors duration-300"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Social sharing */}
                {/* Social sharing */}
                <div className="mt-12 pt-8 border-t border-dark-border animate-fade-in">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Share this article</h3>

                        <div className="flex items-center space-x-4">
                            {[
                                {
                                    key: "twitter",
                                    icon: Twitter,
                                    action: () => handleShare("twitter"),
                                    shiny: true,     // example: only Twitter had ShinyButton before
                                },
                                {
                                    key: "facebook",
                                    icon: Facebook,
                                    action: () => handleShare("facebook"),
                                },
                                {
                                    key: "linkedin",
                                    icon: Linkedin,
                                    action: () => handleShare("linkedin"),
                                },
                                {
                                    key: "native",
                                    icon: Share2,
                                    action: () =>
                                        navigator.share?.({
                                            title: post.title,
                                            url: window.location.href,
                                        }),
                                },
                            ].map(({ key, icon: Icon, action, shiny }) => {
                                const buttonContent = (
                                    <button
                                        key={key}
                                        onClick={action}
                                        className="cursor-pointer p-2 glass-card hover:bg-dark-lighter/70 transition-colors duration-300 rounded-lg"
                                    >
                                        <Icon className="w-5 h-5 text-cyan" />
                                    </button>
                                )

                                // Some of your buttons used <ShinyButton>, so preserve the option
                                return (
                                    <ShinyButton key={key}>{buttonContent}</ShinyButton>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </article>
    )
}
