import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const Divider = ({ className = "" }) => {
    return (
        <div className={`flex items-center justify-center gap-4 py-8 ${className}`}>
            <div className="h-px bg-gray-200 flex-1"></div>
            <div className="bg-[#1a1a1a] p-2 rounded-full">
                <Sparkles size={16} className="text-brand-cream" />
            </div>
            <div className="h-px bg-gray-200 flex-1"></div>
        </div>
    )
}

export default Divider
