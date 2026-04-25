'use client'
import { useEffect, useRef } from 'react'

const projects = [
  {
    tag: 'Featured · Best Project Award',
    title: 'Smart E-Stick for the Visually Impaired',
    description: 'An award-winning IoT solution that combined a microcontroller-driven smart stick with an Android app to help visually impaired users navigate the world in real-time.',
    impact: 'Best Project among 70+ teams · 3 IEEE publications · CNN + OCR-based object detection',
    details: [
      'Implemented CNN-based object detection and OCR text extraction using NLP for real-world scene understanding.',
      'Built live GPS tracking, SOS alerts, and stick location tracking into the Android companion app.',
      'Published in IEEE IBSSC 2019 and IEEE GCAT 2019.',
    ],
    stack: ['Android', 'Python', 'TensorFlow', 'CNN', 'NLP', 'IoT', 'GCP Vision API'],
    period: 'Jun 2018 — May 2019',
    featured: true,
  },
  {
    tag: 'Research Project · Georgia Tech',
    title: 'Visual Reasoning for the Visually Impaired',
    description: 'A deep learning model enabling blind users to query their physical environment through natural language — combining computer vision and NLP into a single inference pipeline.',
    impact: '82% accuracy on 1,000 real-world scenarios · CNNs + BERT',
    details: [
      'Developed an end-to-end image-based question answering system using PyTorch and TensorFlow.',
      'Integrated CNNs for object detection and BERT for natural language query understanding.',
      'Evaluated on a custom dataset of 1,000 real-world indoor and outdoor scenes.',
    ],
    stack: ['PyTorch', 'TensorFlow', 'BERT', 'CNN', 'Python', 'Computer Vision'],
    period: 'Sep 2021 — Dec 2021',
    featured: true,
  },
  {
    tag: 'Professional · Walmart Global Tech',
    title: 'Last-Mile Delivery Planner',
    description: 'Core infrastructure for planning delivery trips at scale — batching millions of orders daily into optimal routes across 500+ locations using multi-strategy assignment logic.',
    impact: '18% reduction in average route time · 500+ US locations · millions of orders',
    details: [
      'Designed and shipped scalable batching strategies: single-order, multi-order, and dynamic-order modes.',
      'Optimized carrier, van, and driver assignment using constraint-based algorithms in Spring Boot.',
      'Built Kafka-powered event streams for real-time order updates and trip state management.',
    ],
    stack: ['Java', 'Spring Boot', 'Apache Kafka', 'REST APIs', 'Cucumber', 'Microservices'],
    period: 'Feb 2023 — Present',
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>
      <p className="section-label mb-4 reveal">Projects</p>
      <h2 className="font-display text-4xl md:text-5xl font-medium text-ink-900 dark:text-cream-100 mb-4 reveal reveal-delay-1">
        Work that matters.
      </h2>
      <p className="font-body text-ink-500 dark:text-ink-400 mb-16 max-w-xl reveal reveal-delay-2">
        From award-winning research to production systems serving millions — built with intention, shipped with craft.
      </p>

      <div className="space-y-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`reveal reveal-delay-${Math.min(i + 1, 4)} group border ${p.featured ? 'border-gold-400/30 bg-cream-100/50 dark:bg-ink-800/40' : 'border-ink-200/30 dark:border-ink-700/30'} p-8 hover:border-gold-400/60 transition-all duration-300`}
          >
            <div className="md:flex md:justify-between md:items-start mb-4">
              <div className="flex-1">
                <p className="font-mono text-[11px] text-gold-500 mb-2 uppercase tracking-widest">{p.tag}</p>
                <h3 className="font-display text-2xl md:text-3xl font-medium text-ink-900 dark:text-cream-100 mb-2 group-hover:text-gold-500 transition-colors">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-ink-500 dark:text-ink-400 leading-relaxed max-w-2xl">{p.description}</p>
              </div>
              <p className="font-mono text-xs text-ink-400 mt-2 md:mt-0 md:ml-8 shrink-0">{p.period}</p>
            </div>

            <div className="bg-gold-400/8 dark:bg-gold-400/5 border border-gold-400/20 px-4 py-3 mb-6 font-body text-sm text-gold-600 dark:text-gold-400">
              ↳ {p.impact}
            </div>

            <ul className="space-y-2 mb-6">
              {p.details.map((d, j) => (
                <li key={j} className="font-body text-sm text-ink-500 dark:text-ink-400 flex gap-3 leading-relaxed">
                  <span className="text-gold-400 shrink-0 mt-0.5">·</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {p.stack.map((s, j) => (
                <span key={j} className="skill-pill text-ink-500 dark:text-ink-400 border-ink-200/50 dark:border-ink-600/50 hover:border-gold-400 hover:text-gold-500">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
