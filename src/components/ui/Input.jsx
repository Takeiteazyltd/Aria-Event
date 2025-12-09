import React from 'react'

const Input = React.forwardRef(
  ({ label, error, className = '', type = 'text', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="block text-sm font-semibold mb-2 text-gray-700">{label}</label>}
        <input
          ref={ref}
          type={type}
          className={`w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 transition-colors ${
            error ? 'border-red-500' : ''
          } ${className}`}
          {...props}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
