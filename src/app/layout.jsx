import "./globals.css"
import Navigation from "@/components/Navigation"

export const metadata = {
  title: "FutureBlog - Modern Tech Insights",
  description: "A futuristic blog exploring the latest in technology, AI, and digital innovation.",
  keywords: "technology, AI, future, innovation, blog",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-dark text-text-primary min-h-screen">
        <div className="relative">
          {/* Background gradient */}
          <div className="fixed inset-0 bg-gradient-to-br from-dark via-dark to-dark-lighter -z-10" />

          {/* Animated background elements */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <Navigation />
          <main className="relative z-10">{children}</main>
        </div>
      </body>
    </html>
  )
}
