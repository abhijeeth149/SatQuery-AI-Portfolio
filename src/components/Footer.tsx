import { Satellite, Github, ExternalLink, ShieldCheck, Heart } from 'lucide-react'
import { PROJECT_METADATA } from '../data/project'

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & SIH */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-white">
                <Satellite className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight font-display">
                SATQUERY <span className="text-cyan-400">AI</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              An interactive vision-language assistant for multimodal remote sensing image analysis through natural-language queries, physics-grounded spectral/SAR analysis, agentic tool orchestration, and auditable spatial evidence.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-cyan-300">
                Problem: {PROJECT_METADATA.sihProblemId}
              </span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-sky-300">
                {PROJECT_METADATA.organization}
              </span>
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-emerald-300">
                Team: {PROJECT_METADATA.team}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
              Technical Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#overview" className="text-slate-400 hover:text-cyan-400 transition-colors">Project Overview</a></li>
              <li><a href="#problem" className="text-slate-400 hover:text-cyan-400 transition-colors">The Problem Statement</a></li>
              <li><a href="#solution" className="text-slate-400 hover:text-cyan-400 transition-colors">Agentic Solution</a></li>
              <li><a href="#architecture" className="text-slate-400 hover:text-cyan-400 transition-colors">System Architecture</a></li>
              <li><a href="#capabilities" className="text-slate-400 hover:text-cyan-400 transition-colors">Specialist Remote Sensing</a></li>
              <li><a href="#evidence" className="text-slate-400 hover:text-cyan-400 transition-colors">Spatial Evidence & Confidence</a></li>
              <li><a href="#trace" className="text-slate-400 hover:text-cyan-400 transition-colors">Execution Traceability</a></li>
            </ul>
          </div>

          {/* Col 3: Research & Code */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">
              Research & Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#research" className="text-slate-400 hover:text-cyan-400 transition-colors">EuroSAT Adaptation (87.25%)</a></li>
              <li><a href="#technology" className="text-slate-400 hover:text-cyan-400 transition-colors">Technology Stack Matrix</a></li>
              <li><a href="#screenshots" className="text-slate-400 hover:text-cyan-400 transition-colors">Application UI Showcase</a></li>
              <li><a href="#roadmap" className="text-slate-400 hover:text-cyan-400 transition-colors">Phased Development Roadmap</a></li>
              <li>
                <a
                  href={PROJECT_METADATA.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:underline pt-2"
                >
                  <Github className="w-3.5 h-3.5" /> SatQuery AI GitHub Repo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2026 SatQuery AI · Smart India Hackathon 2026 · Team SHOURYANGULU</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Grounded & Verified Output
            </span>
            <span>ISRO Space Technology</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
