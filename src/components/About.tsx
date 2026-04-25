'use client'
import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="section-label mb-4 reveal">About</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-ink-900 dark:text-cream-100 leading-tight mb-8 reveal reveal-delay-1">
            The unconventional<br />
            <span className="italic">path</span> to Big Tech.
          </h2>
          <div className="reveal reveal-delay-2 space-y-4 font-body text-ink-500 dark:text-ink-300 leading-relaxed">
            <p>
              I failed IIT JEE. I joined a tier-3 college. I graduated as gold medalist, 10-year academic topper, and head girl. Then I earned my MS from Georgia Tech with a 3.9 GPA and joined Walmart Global Tech in Silicon Valley.
            </p>
            <p>
              Today I architect backend systems that batch millions of delivery orders across 500+ locations — optimizing carrier, driver, and route assignments in real-time using Java, Spring Boot, and Apache Kafka.
            </p>
            <p>
              Beyond the terminal, I've built a community of 200K+ people — students and early-career engineers who want to break into tech and design careers they're proud of. I believe the journey is part of the product.
            </p>
          </div>
        </div>

        <div className="space-y-6 reveal reveal-delay-3">
          {[
            { label: 'Currently', value: 'Software Engineer III · Walmart Global Tech, Sunnyvale CA' },
            { label: 'Education', value: 'MSCS · Georgia Tech (3.9 GPA) · BE Computer Engineering · Gold Medalist' },
            { label: 'Focus', value: 'Distributed Systems · Last-mile Delivery · Backend Engineering' },
            { label: 'Writing', value: 'Substack · GeeksforGeeks · 4 IEEE publications' },
            { label: 'Community', value: '200K Instagram · 30K LinkedIn · 22K YouTube' },
          ].map((item, i) => (
            <div key={i} className="border-t border-ink-200/40 dark:border-ink-700/40 pt-4">
              <p className="font-mono text-xs text-gold-500 mb-1">{item.label}</p>
              <p className="font-body text-sm text-ink-700 dark:text-ink-300">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
