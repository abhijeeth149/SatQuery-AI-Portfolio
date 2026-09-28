import React from 'react'
import { cn } from '../lib/utils'
import { StatusType } from '../types'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: StatusType | string
  variant?: 'default' | 'outline' | 'ghost' | 'glow'
  size?: 'sm' | 'md' | 'lg'
}

export function StatusBadge({ status = 'LIVE', variant = 'default', size = 'sm', className, children, ...props }: BadgeProps) {
  const statusUpper = (children?.toString() || status).toUpperCase()

  const getStatusClasses = (val: string) => {
    switch (val) {
      case 'LIVE':
      case 'CURRENT':
      case 'COMPLETED':
        return 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
      case 'EXPERIMENTAL':
      case 'IN_PROGRESS':
        return 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30'
      case 'RESEARCH':
        return 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30'
      case 'PLANNED':
        return 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30'
      case 'PREFERRED':
        return 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30'
      case 'FALLBACK':
        return 'bg-slate-500/15 text-slate-600 dark:text-slate-400 border-slate-500/30'
      default:
        return 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/30'
    }
  }

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[11px] font-mono font-medium',
    md: 'px-2.5 py-1 text-xs font-mono font-medium',
    lg: 'px-3 py-1.5 text-sm font-mono font-semibold',
  }[size]

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border transition-all uppercase tracking-wider',
        getStatusClasses(statusUpper),
        sizeClasses,
        className
      )}
      {...props}
    >
      <span className={cn(
        'w-1.5 h-1.5 rounded-full',
        statusUpper === 'LIVE' || statusUpper === 'CURRENT' || statusUpper === 'COMPLETED' ? 'bg-emerald-400 animate-pulse' :
        statusUpper === 'EXPERIMENTAL' ? 'bg-amber-400 animate-ping' :
        statusUpper === 'RESEARCH' ? 'bg-purple-400' : 'bg-blue-400'
      )} />
      {children || status}
    </span>
  )
}
