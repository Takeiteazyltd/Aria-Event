import React from 'react'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer'

  const variants = {
    primary: 'bg-[#1a1a1a] text-brand-cream hover:bg-[#2a2a2a] shadow-md hover:shadow-lg transition-transform active:scale-95',
    secondary: 'bg-[#1a1a1a] text-brand-cream hover:bg-[#2a2a2a] shadow-md transition-transform active:scale-95',
    outline: 'border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-brand-cream font-bold transition-transform active:scale-95',
    ghost: 'text-[#1a1a1a] hover:bg-gray-100 font-bold transition-transform active:scale-95',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  }

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : ''

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <span className="animate-spin">⟳</span>
          טוען...
        </>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
