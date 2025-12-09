import React from 'react'
import { ChevronDown } from 'lucide-react'

const Select = React.forwardRef(
  ({ label, error, options = [], className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="block text-sm font-semibold mb-2 text-gray-700">{label}</label>}
        <div className="relative">
          <select
            ref={ref}
            className={`w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 transition-colors appearance-none ${
              error ? 'border-red-500' : ''
            } ${className}`}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={18}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select
