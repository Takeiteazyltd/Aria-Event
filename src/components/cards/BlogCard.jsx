import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

const BlogCard = ({ post }) => {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
      <Link to={`/blog/${post.slug}`}>
        <Card hoverable className="h-full flex flex-col overflow-hidden">
          {/* Image */}
          <div className="relative overflow-hidden h-40 bg-gray-200">
            <motion.img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col flex-grow">
            {/* Category */}
            <Badge variant="secondary" size="sm" className="w-fit mb-2">
              {post.category}
            </Badge>

            {/* Title */}
            <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-2">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="border-t-2 border-gray-100 pt-3 space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <User size={14} />
                  <span>{post.author}</span>
                </div>
                <ArrowLeft size={16} className="text-primary-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}

export default BlogCard
