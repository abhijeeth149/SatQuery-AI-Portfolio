import React from 'react'
import { cn } from '../lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'subtle' | 'interactive' | 'accent' | 'radar'
  glow?: boolean
}

export function Card({ className, variant = 'default', glow = false, children, ...props }: CardProps) {
  const variants = {
    default: 'bg-card text-card-foreground border border-border rounded-xl shadow-sm',
    subtle: 'bg-muted/40 text-foreground border border-border/60 rounded-xl',
    interactive: 'bg-card text-card-foreground border border-border rounded-xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-950/10 transition-all duration-300',
    accent: 'bg-gradient-to-br from-card to-cyan-950/20 text-card-foreground border border-cyan-500/30 rounded-xl',
    radar: 'bg-card/90 backdrop-blur-md border border-sky-500/30 rounded-xl relative overflow-hidden',
  }

  return (
    <div
      className={cn(
        variants[variant],
        glow && 'shadow-[0_0_25px_rgba(6,182,212,0.15)] border-cyan-500/40',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 pb-3 space-y-1.5', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn('text-lg font-semibold tracking-tight text-foreground flex items-center gap-2', className)} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-sm text-muted-foreground leading-relaxed', className)} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('p-6 pt-3', className)} {...props}>
      {children}
    </div>
  )
}
