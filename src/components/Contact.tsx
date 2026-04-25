'use client'
import { useEffect, useRef } from 'react'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const links = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/devshreebharatia-038215180', note: '30K+ followers' },
    { label: 'Substack', href: 'https://substack.com/@devshreebharatia', note: 'Writing & essays' },
    { label: 'Email', href: 'mailto:devshreebharatia1791997@gmail.com', note: 'devshreebharatia1791997@gmail.com' },
    { label: 'Instagram', href: 'https://instagram.com', note: '200K+ community' },
  ]

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <div className="md:grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="section-label mb-4 reveal">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-ink-900 dark:text-cream-100 leading-tight mb-6 reveal reveal-delay-1">
            Let's build<br />
            <span className="italic text-gold-400">something</span> together.
          </h2>
          <p className="font-body text-ink-500 dark:text-ink-400 leading-relaxed mb-10 max-w-md reveal reveal-delay-2">
            Open to senior engineering roles, mentorship collaborations, speaking opportunities, and content partnerships. I reply to every thoughtful message.
          </p>

          <a
            href="mailto:devshreebharatia1791997@gmail.com"
            className="inline-block font-body text-sm font-medium px-8 py-4 bg-ink-900 dark:bg-cream-100 text-cream-50 dark:text-ink-900 hover:bg-gold-400 dark:hover:bg-gold-400 dark:hover:text-cream-50 transition-all duration-200 reveal reveal-delay-3"
          >
            Send a message →
          </a>
        </div>

        <div className="mt-12 md:mt-0 space-y-0 reveal reveal-delay-2">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex justify-between items-center py-5 border-b border-ink-200/30 dark:border-ink-700/30 hover:border-gold-400/50 transition-all"
            >
              <div>
                <p className="font-body text-base font-medium text-ink-800 dark:text-cream-100 group-hover:text-gold-500 transition-colors">{l.label}</p>
                <p className="font-mono text-xs text-ink-400 mt-0.5">{l.note}</p>
              </div>
              <span className="text-ink-300 dark:text-ink-600 group-hover:text-gold-400 transition-colors text-lg">↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-ink-200/20 dark:border-ink-700/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="font-display text-lg font-medium text-ink-400 dark:text-ink-600">
          Devshree Bharatia<span className="text-gold-400">.</span>
        </p>
        <p className="font-mono text-xs text-ink-400">
          SWE3 · Walmart Global Tech · Silicon Valley · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  )
}
