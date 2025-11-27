import Hero from "@/components/Hero2"
import RecentPosts from "@/components/RecentPosts"
import Newsletter from "@/components/Newsletter"
import { getAllPosts } from "@/lib/posts"

export default async function HomePage() {
  const posts = await getAllPosts()
  const recentPosts = posts.slice(0, 8)

  return (
    <div className="animate-fade-in">
      

      <Hero />
      <RecentPosts posts={recentPosts} />
      <Newsletter />
    </div>
  )
}
