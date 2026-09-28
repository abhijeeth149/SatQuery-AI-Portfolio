import { useState, useEffect } from 'react'
import {
  Satellite,
  Github,
  ExternalLink,
  Menu,
  X,
  Layers,
  Sparkles,
  Terminal,
} from 'lucide-react'
import { PROJECT_METADATA } from '../data/project'
import { ThemeToggle } from './ThemeToggle'
import { Button } from './Button'
import { StatusBadge } from './Badge'

interface NavbarProps {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

const NAV_LINKS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Evidence', href: '#evidence' },
  { label: 'Trace', href: '#trace' },
  { label: 'Screenshots', href: '#screenshots' },
  { label: 'Technology', href: '#technology' },
  { label: 'Research', href: '#research' },
  { label: 'Roadmap', href: '#roadmap' },
]

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Section spy
      const sections = NAV_LINKS.map((link) => link.href.substring(1))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-background/85 backdrop-blur-md border-b border-border shadow-md shadow-black/5'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo & Brand */}
        <a href="#overview" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Satellite className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-foreground font-display">
                SATQUERY <span className="text-cyan-500">AI</span>
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.2 text-[10px] font-mono rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30">
                {PROJECT_METADATA.sihProblemId}
              </span>
            </div>
            <span className="text-[10px] font-mono text-muted-foreground tracking-wider uppercase hidden md:inline">
              ISRO Space Tech Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-muted/40 px-3 py-1.5 rounded-full border border-border/80 backdrop-blur-sm">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-150 ${
                  isActive
                    ? 'bg-primary text-primary-foreground font-semibold shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/80'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <a
            href={PROJECT_METADATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button variant="outline" size="sm" icon={<Github className="w-4 h-4" />}>
              GitHub
            </Button>
          </a>

          {PROJECT_METADATA.liveDemoUrl ? (
            <a
              href={PROJECT_METADATA.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
            >
              <Button variant="primary" size="sm" icon={<ExternalLink className="w-4 h-4" />}>
                Live Demo
              </Button>
            </a>
          ) : (
            <a href="#demo" className="hidden sm:inline-flex">
              <Button variant="primary" size="sm" icon={<Terminal className="w-4 h-4" />}>
                Interactive Demo
              </Button>
            </a>
          )}

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg border border-border bg-background hover:bg-muted text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[60px] bg-background/95 backdrop-blur-xl border-b border-border shadow-xl p-6 transition-all animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 mb-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2 pt-4 border-t border-border">
            <a
              href={PROJECT_METADATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="outline" size="md" className="w-full justify-center" icon={<Github className="w-4 h-4" />}>
                View on GitHub
              </Button>
            </a>
            <a href="#demo" onClick={() => setMobileMenuOpen(false)} className="w-full">
              <Button variant="primary" size="md" className="w-full justify-center" icon={<Terminal className="w-4 h-4" />}>
                Launch Interactive Demo
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
