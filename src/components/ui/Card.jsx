import React from 'react'

const Card = ({ children, className = '', hoverable = false, ...props }) => {
  const baseStyles = 'bg-white rounded-xl overflow-hidden'
  const shadowStyles = hoverable
    ? 'shadow-lg hover:shadow-2xl transition-shadow duration-300'
    : 'shadow-md'

  return (
    <div className={`${baseStyles} ${shadowStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card
