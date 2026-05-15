import * as React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'tire-type' | 'used' | 'new' | 'popular'
}

const variantStyles: Record<string, string> = {
  'tire-type': 'bg-[#1e1e1e] text-[#E8A820]',
  used: 'bg-[#B81C1C]/20 text-[#E87070] border border-[#B81C1C]/40',
  new: 'bg-green-950 text-green-400 border border-green-800',
  popular: 'bg-[#E8A820]/10 text-[#E8A820] border border-[#E8A820]/30',
}

export function Badge({ className, variant = 'tire-type', children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-sm uppercase tracking-wide',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
