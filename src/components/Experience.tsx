'use client'
import { useEffect, useRef } from 'react'

const experience = [
  {
    company: 'Walmart Global Tech',
    role: 'Software Engineer III',
    period: 'Feb 2023 — Present',
    location: 'Sunnyvale, CA',
    current: true,
    bullets: [
      'Engineered scalable backend services in Planner — a Spring Boot + Kafka framework batching millions of express and scheduled orders into optimized last-mile delivery trips across 500+ US locations.',
      'Optimized carrier, van, and driver assignment algorithms, reducing average route time by 18% and improving delivery success rates in high-volume, time-sensitive environments.',
      'Implemented single-order, multi-order, and dynamic-order batching strategies using Java and REST APIs.',
    ],
    stack: ['Java', 'Spring Boot', 'Apache Kafka', 'REST APIs', 'Cucumber'],
  },
  {
    company: 'Georgia Institute of Technology',
    role: 'Graduate Teaching Assistant — High Performance Computer Architecture',
    period: 'Jan 2022 — Dec 2022',
    location: 'Atlanta, GA',
    current: false,
    bullets: [
      'Conducted office hours and formulated assignments covering branch prediction, out-of-order execution, multi-level caches, cache coherence, and multi-core processors.',
      'Guided students in applying architecture concepts to optimize software performance and design purpose-built hardware modules.',
    ],
    stack: ['Computer Architecture', 'C', 'Assembly'],
  },
  {
    company: 'Walmart Global Tech',
    role: 'Software Engineer III — Intern',
    period: 'May 2022 — Aug 2022',
    location: 'California, USA',
    current: false,
    bullets: [
      'Built features for Orbit, a Java-based ingestion and REST API framework processing requests from shipment, purchase, delivery, and return modules.',
      'Independently shipped "Delivery Date Tracking" and "Wisbot Reasoning" features for the Mexico platform.',
      'Maintained Kafka servers for request handling and ElasticSearch for indexing and efficient record storage.',
    ],
    stack: ['Java', 'Spring Boot', 'Kafka', 'ElasticSearch'],
  },
  {
    company: 'Shoreline IoT',
    role: 'Software Engineer I',
    period: 'Jun 2019 — May 2021',
    location: 'Pune, India',
    current: false,
    bullets: [
      'Designed Node.js microservices for a smart-gateway IoT device, implementing MQTT pub-sub architecture for real-time cloud-based monitoring and event scheduling.',
      'Awarded "Notable Achievement Award" for leading end-to-end project delivery and independently managing client communication with Dialogue Semiconductors.',
    ],
    stack: ['Node.js', 'MQTT', 'IoT', 'JavaScript'],
  },
  {
    company: 'Schlumberger',
    role: 'Data Science Intern',
    period: 'Jun 2018 — Aug 2018',
    location: 'Pune, India',
    current: false,
    bullets: [
      'Designed interactive dashboards and reports in Microsoft PowerBI to analyze relational databases, leveraging dynamic query parameters.',
      'Improved internal data visibility and enabled 25% faster operational insights for stakeholders. Published findings on the official company blog.',
    ],
    stack: ['PowerBI', 'SQL', 'Data Analysis'],
  },
]

export default function Experience() {
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
    <section id="experience" className="py-24 px-6 bg-cream-100/60 dark:bg-ink-800/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4 reveal">Experience</p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-ink-900 dark:text-cream-100 mb-16 reveal reveal-delay-1">
          The career arc.
        </h2>

        <div className="space-y-0">
          {experience.map((job, i) => (
            <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 4)} relative pl-8 pb-12 border-l border-gold-400/20 last:border-transparent`}>
              {/* Dot */}
              <div className={`absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full border-2 ${job.current ? 'bg-gold-400 border-gold-400' : 'bg-cream-50 dark:bg-ink-900 border-gold-400/50'}`} />

              <div className="md:flex md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="font-display text-xl font-medium text-ink-900 dark:text-cream-100">{job.role}</h3>
                  <p className="font-body text-sm text-gold-500 mt-0.5">{job.company} · {job.location}</p>
                </div>
                <div className="flex items-center gap-2 mt-1 md:mt-0">
                  {job.current && (
                    <span className="font-mono text-[10px] px-2 py-0.5 bg-gold-400/10 text-gold-600 dark:text-gold-400 border border-gold-400/30">
                      Current
                    </span>
                  )}
                  <span className="font-mono text-xs text-ink-400 dark:text-ink-400">{job.period}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {job.bullets.map((b, j) => (
                  <li key={j} className="font-body text-sm text-ink-500 dark:text-ink-400 leading-relaxed flex gap-3">
                    <span className="text-gold-400 mt-1 shrink-0">—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.stack.map((s, j) => (
                  <span key={j} className="skill-pill text-ink-500 dark:text-ink-400 border-ink-200/50 dark:border-ink-600/50 hover:border-gold-400 hover:text-gold-500">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
