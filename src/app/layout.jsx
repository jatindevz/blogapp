import "./globals.css"
import Navigation from "@/components/Navigation"
import SplashCursor from "@/components/ui/SplashCursor"
import Script from "next/script"
import Analytics from "./analytics"

export const metadata = {
  title: "FutureBlog - Modern Tech Insights",
  description: "A futuristic blog exploring the latest in technology, AI, and digital innovation.",
  keywords: "technology, AI, future, innovation, blog",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-346B36FN9N"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-346B36FN9N', { send_page_view: false });
          `}
        </Script>
      </head>

      <body className="bg-dark text-text-primary min-h-screen">
        {/* Track SPA pageviews */}
        <Analytics />

        <SplashCursor />

        <div className="relative">
          <div className="fixed inset-0 bg-gradient-to-br from-dark via-dark to-dark-lighter -z-10" />

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
