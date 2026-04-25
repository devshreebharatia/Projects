'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    setTimeout(() => el.classList.add('visible'), 100)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto">
      <div ref={ref} className="reveal">
        <p className="section-label mb-6">Software Engineer III · Walmart Global Tech</p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] tracking-tight text-ink-900 dark:text-cream-100 mb-8 max-w-4xl">
          I build systems<br />
          <span className="italic text-gold-400">at scale</span> — and<br />
          share the journey.
        </h1>

        <p className="font-body text-lg text-ink-500 dark:text-ink-300 max-w-xl leading-relaxed mb-10">
          From a tier-3 college in India to Big Tech in Silicon Valley — gold medalist, Georgia Tech MSCS, and builder of infrastructure that moves millions of packages daily. I also write about it for 200K+ people.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="#projects"
            className="inline-block font-body text-sm font-medium px-6 py-3 bg-ink-900 dark:bg-cream-100 text-cream-50 dark:text-ink-900 hover:bg-gold-400 dark:hover:bg-gold-400 dark:hover:text-cream-50 transition-all duration-200"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="inline-block font-body text-sm font-medium px-6 py-3 border border-ink-300 dark:border-ink-500 text-ink-700 dark:text-ink-300 hover:border-gold-400 hover:text-gold-500 transition-all duration-200"
          >
            Get in touch
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-20 pt-10 border-t border-ink-300/20 dark:border-ink-700/40 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: '200K+', label: 'Instagram community' },
            { n: '30K+', label: 'LinkedIn followers' },
            { n: '3.9', label: 'GPA · Georgia Tech' },
            { n: '500+', label: 'Locations served daily' },
          ].map((s, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1}`}>
              <p className="font-display text-3xl md:text-4xl font-medium text-gold-400">{s.n}</p>
              <p className="font-body text-xs text-ink-400 dark:text-ink-400 mt-1 uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-16 flex items-center gap-3">
        <div className="w-6 h-10 border border-ink-300/30 dark:border-ink-600 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-gold-400 rounded-full animate-bounce" />
        </div>
        <span className="font-mono text-xs text-ink-400">scroll</span>
      </div>
    </section>
  )
}
