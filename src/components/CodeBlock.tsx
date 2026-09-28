import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { cn } from '../lib/utils'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  className?: string
  maxHeight?: string
}

export function CodeBlock({ code, language = 'json', title, className, maxHeight = '400px' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn('rounded-xl border border-border bg-slate-950 text-slate-100 overflow-hidden shadow-lg font-mono text-xs', className)}>
      {title && (
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs text-slate-300 font-medium">{title}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase text-cyan-400 font-semibold">{language}</span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors py-0.5 px-2 rounded bg-slate-800 hover:bg-slate-700"
              title="Copy to clipboard"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
      )}
      <div className="p-4 overflow-x-auto" style={{ maxHeight }}>
        <pre className="text-slate-200 leading-relaxed font-mono whitespace-pre">{code}</pre>
      </div>
    </div>
  )
}
