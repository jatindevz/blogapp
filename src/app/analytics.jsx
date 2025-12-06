"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { Suspense } from "react"

export const dynamic = "force-dynamic"

function AnalyticsInner() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        if (!pathname) return


        const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "")
        window.gtag?.("event", "page_view", {
            page_path: url,
        })

        console.log("Logged page view:", url);
        
    }, [pathname, searchParams])

    return null
}

export default function Analytics() {
    return (
        <Suspense fallback={null}>
            <AnalyticsInner />
        </Suspense>
    )
}
