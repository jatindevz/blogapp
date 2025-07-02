import Image from "next/image"
import { Code, Zap, Users, Target } from "lucide-react"

export const metadata = {
    title: "About - FutureBlog",
    description: "Learn more about FutureBlog and our mission to explore the digital frontier.",
}

export default function AboutPage() {
    const features = [
        {
            icon: Code,
            title: "Technical Excellence",
            description: "Deep dives into cutting-edge technologies and development practices.",
        },
        {
            icon: Zap,
            title: "Innovation Focus",
            description: "Exploring breakthrough innovations that shape our digital future.",
        },
        {
            icon: Users,
            title: "Community Driven",
            description: "Building a community of tech enthusiasts and forward-thinkers.",
        },
        {
            icon: Target,
            title: "Future Focused",
            description: "Anticipating trends and preparing for tomorrow's challenges.",
        },
    ]

    return (
        <div className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center mb-20 animate-slide-up">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        About <span className="text-gradient">FutureBlog</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        We're passionate about exploring the intersection of technology, innovation, and human potential. Our
                        mission is to decode the digital future and share insights that matter.
                    </p>
                </div>

                {/* Story Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="animate-slide-up">
                        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                        <div className="space-y-4 text-text-secondary leading-relaxed">
                            <p>
                                Founded in 2024, FutureBlog emerged from a simple belief: that understanding technology is key to
                                shaping a better tomorrow. We started as a small team of developers, designers, and thinkers who wanted
                                to bridge the gap between complex tech concepts and everyday understanding.
                            </p>
                            <p>
                                Today, we're a growing community of innovators, sharing insights on AI, blockchain, quantum computing,
                                and the countless ways technology is reshaping our world.
                            </p>
                            <p>
                                Our content spans from beginner-friendly tutorials to deep technical analyses, ensuring there's
                                something valuable for everyone on their tech journey.
                            </p>
                        </div>
                    </div>

                    <div className="relative animate-fade-in">
                        <div className="glass-card p-8 rounded-2xl">
                            <Image
                                src="/placeholder.svg?height=400&width=500"
                                alt="About FutureBlog"
                                width={500}
                                height={400}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        What Makes Us <span className="text-gradient">Different</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className="glass-card p-6 text-center hover:bg-dark-lighter/70 transition-all duration-300 animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan to-purple rounded-lg mb-4">
                                    <feature.icon className="w-6 h-6 text-dark" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission Statement */}
                <div className="glass-card p-8 md:p-12 text-center animate-fade-in">
                    <h2 className="text-3xl font-bold mb-6">
                        Our <span className="text-gradient">Mission</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                        To democratize access to cutting-edge technology insights, foster innovation, and build a community where
                        curiosity meets expertise. We believe that by sharing knowledge and exploring possibilities together, we can
                        create a more connected and technologically empowered world.
                    </p>
                </div>
            </div>
        </div>
    )
}
