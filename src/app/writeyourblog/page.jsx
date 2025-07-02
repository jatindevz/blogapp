// app/writeyourblog/page.jsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import '@uiw/react-md-editor/markdown-editor.css'
import '@uiw/react-markdown-preview/markdown.css'

// Lazy load the MD editor
const MDEditor = dynamic(
    () => import('@uiw/react-md-editor'),
    { ssr: false }
)

export default function WriteBlogPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        content: '',
        category: 'technology',
        tags: [],
        image: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleContentChange = (value) => {
        setFormData(prev => ({ ...prev, content: value }))
    }

    const handleTagsChange = (e) => {
        const tags = e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag);
        setFormData(prev => ({ ...prev, tags }))
    }

    const calculateReadTime = (content) => {
        const wordCount = content.split(/\s+/).length
        const minutes = Math.ceil(wordCount / 200)
        return `${minutes} min read`
    }

    const formatDate = () => {
        const date = new Date();
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        console.log(formData);
        

        // try {
        //     // Generate slug from title
        //     const slug = formData.title.toLowerCase()
        //         .replace(/[^\w\s]/g, '')  // Remove special characters
        //         .replace(/\s+/g, '-')      // Replace spaces with dashes
        //         .substring(0, 50);         // Limit length

        //     // Prepare complete post data
        //     const completePost = {
        //         ...formData,
        //         slug,
        //         date: formatDate(),
        //         readTime: calculateReadTime(formData.content)
        //     }

        //     const response = await fetch('/api/posts', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(completePost),
        //     })

        //     if (!response.ok) {
        //         throw new Error('Failed to save post')
        //     }

        //     const savedPost = await response.json()
        //     router.push(`/blog/${savedPost.slug}`)
        // } catch (err) {
        //     setError(err.message)
        //     console.error('Error saving post:', err)
        // } finally {
        //     setIsSubmitting(false)
        // }
    }

    return (
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Write Your Blog Post
            </h1>

            {error && (
                <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
                    <p>{error}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Title *
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-800 dark:text-white"
                        placeholder="Enter your blog title"
                        required
                    />
                </div>

                {/* Excerpt */}
                <div>
                    <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Excerpt *
                    </label>
                    <textarea
                        id="excerpt"
                        name="excerpt"
                        value={formData.excerpt}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-800 dark:text-white"
                        placeholder="Brief summary of your post"
                        rows={3}
                        required
                    />
                </div>

                {/* Category */}
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Category *
                    </label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-800 dark:text-white"
                        required
                    >
                        <option value="technology">Technology</option>
                        <option value="ai">AI</option>
                        <option value="quantum">Quantum</option>
                        <option value="blockchain">Blockchain</option>
                        <option value="sustainability">Sustainability</option>
                        <option value="security">Security</option>
                        <option value="development">Development</option>
                    </select>
                </div>

                {/* Tags */}
                <div>
                    <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Tags (comma separated)
                    </label>
                    <input
                        type="text"
                        id="tags"
                        name="tags"
                        value={formData.tags.join(', ')}
                        onChange={handleTagsChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-800 dark:text-white"
                        placeholder="e.g., artificial-intelligence, machine-learning"
                    />
                </div>

                {/* Featured Image */}
                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Featured Image URL
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-800 dark:text-white"
                        placeholder="e.g., /futureofai.jpg"
                    />
                </div>

                {/* Content Editor */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Content *
                    </label>
                    <div className="mt-1" data-color-mode="light">
                        <MDEditor
                            value={formData.content}
                            onChange={handleContentChange}
                            height={500}
                            preview="edit"
                            className="dark:bg-gray-800 dark:text-white"
                        />
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-4">
                    <button
                        type="button"
                        onClick={() => router.push('/blog')}
                        className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting || !formData.title || !formData.content || !formData.excerpt}
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-md shadow-sm hover:from-cyan-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        {isSubmitting ? 'Publishing...' : 'Publish Post'}
                    </button>
                </div>
            </form>
        </div>
    )
}