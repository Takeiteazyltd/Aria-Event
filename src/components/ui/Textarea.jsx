import React from 'react'

const Textarea = React.forwardRef(
  ({ label, error, className = '', rows = 4, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="block text-sm font-semibold mb-2 text-gray-700">{label}</label>}
        <textarea
          ref={ref}
          rows={rows}
          className={`w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 transition-colors resize-vertical ${
            error ? 'border-red-500' : ''
          } ${className}`}
          {...props}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea
