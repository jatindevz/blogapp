"use client"

import { useState } from "react"
import { Mail, Send } from "lucide-react"
import PraticleCard from "./ui/ParticleCardx"
import { ConfettiButton } from "./ui/confetti"

export default function Newsletter() {
    const [email, setEmail] = useState("")
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [shouldTriggerConfetti, setShouldTriggerConfetti] = useState(false)

    // Email validation function
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValidEmail(email)) {
            // Simulate subscription
            setIsSubscribed(true)
            setShouldTriggerConfetti(true) // Trigger confetti after successful subscription
            setEmail("")

            // Reset states after 3 seconds
            setTimeout(() => {
                setIsSubscribed(false)
                setShouldTriggerConfetti(false)
            }, 3000)
        }
    }

    const isEmailValid = isValidEmail(email)

    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <PraticleCard>
                    <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan to-purple rounded-full mb-6">
                                <Mail className="w-8 h-8 text-dark" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Stay in the <span className="text-gradient">Loop</span>
                            </h2>

                            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
                                Get the latest insights on technology, AI, and digital innovation delivered straight to your inbox.
                            </p>

                            {isSubscribed ? (
                                <div className="animate-fade-in">
                                    <div className="inline-flex items-center space-x-2 text-cyan text-lg font-semibold">
                                        <span>✨ Thanks for subscribing!</span>
                                    </div>
                                    {/* Confetti triggered only after successful subscription */}
                                    {shouldTriggerConfetti && (
                                        <ConfettiButton
                                            options={{
                                                particleCount: 100,
                                                spread: 70,
                                                origin: { y: 0.6 }
                                            }}
                                            isSubmit={true}
                                            className="hidden"
                                        />
                                    )}
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            required
                                            className="flex-1 px-4 py-3 bg-dark-lighter border border-dark-border rounded-lg focus:outline-none focus:border-cyan transition-colors duration-300 text-text-primary placeholder-text-secondary"
                                        />
                                        <button
                                            type="submit"
                                            disabled={!isEmailValid}
                                            className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-dark font-semibold transition-all duration-300 transform ${isEmailValid
                                                    ? "bg-gradient-to-r from-cyan to-purple hover:shadow-lg hover:shadow-cyan/25 hover:scale-105 cursor-pointer"
                                                    : "bg-gray-500 opacity-50 cursor-not-allowed"
                                                }`}
                                        >
                                            <span>Subscribe</span>
                                            <Send className="w-4 h-4" />
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </PraticleCard>
            </div>
        </section>
    )
}