import React from 'react'
import { cn } from '../lib/utils'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  badge?: React.ReactNode
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
  badge,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-3xl space-y-3 mb-12 sm:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      <div className={cn('flex items-center gap-2', align === 'center' ? 'justify-center' : 'justify-start')}>
        <span className="font-mono text-xs font-semibold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase">
          {eyebrow}
        </span>
        {badge}
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground font-display">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  )
}
