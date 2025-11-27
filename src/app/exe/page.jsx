import React from 'react'

const page = () => {
  return (
      <div><Link
          ref={backButtonRef}
          href="/blog"
          className="inline-flex items-center space-x-2 text-cyan hover:text-[#8b5cf6] transition-colors duration-300 mb-8 group glass-card px-4 py-2 rounded-full border border-cyan/20 backdrop-blur-sm"
      >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Blog</span>
      </Link></div>
  )
}

export default page