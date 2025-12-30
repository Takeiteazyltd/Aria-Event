import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Calendar, User } from 'lucide-react'
import { blog } from '@data/blog'
import BlogCard from '@components/cards/BlogCard'

const BlogPost = () => {
  const { slug } = useParams()
  const post = blog.find((b) => b.slug === slug)
  const relatedPosts = blog.filter((b) => b.id !== post?.id).slice(0, 3)

  if (!post) {
    return (
      <div className="container-max py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">המאמר לא נמצא</h1>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Photo Style</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* Hero */}
      <section className="pt-20 pb-10">
        <div className="container-max max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap gap-6 pb-6 border-b-2 border-gray-200 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <span className="text-gray-500">{post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-10">
        <div className="w-full h-96 bg-gray-200 overflow-hidden">
          <motion.img
            src={post.image || 'https://picsum.photos/seed/blog-placeholder/800/600'}
            alt={post.title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            onError={(e) => {
              e.target.src = 'https://picsum.photos/seed/blog-placeholder/800/600'
            }}
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-10 pb-20">
        <div className="container-max max-w-3xl">
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {post.content}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container-max">
          <h2 className="text-4xl font-bold mb-12">מאמרים קשורים</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((related, idx) => (
              <motion.div
                key={related.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <BlogCard post={related} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPost
