'use client'
import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'C/C++', 'TypeScript'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['Spring Boot', 'Node.js', 'TensorFlow', 'PyTorch', 'REST APIs', 'Cucumber'],
  },
  {
    category: 'Infrastructure & Cloud',
    skills: ['Apache Kafka', 'AWS', 'Google Cloud Platform', 'Microsoft Azure', 'Firebase', 'Docker', 'Kubernetes'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'Elasticsearch', 'SQLite', 'JDBC'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Git', 'CI/CD', 'Jenkins', 'IntelliJ', 'VS Code', 'Postman', 'Grafana', 'JIRA'],
  },
  {
    category: 'Machine Learning',
    skills: ['CNNs', 'BERT', 'Computer Vision', 'NLP', 'Deep Learning', 'Model Evaluation'],
  },
]

export default function Skills() {
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
    <section id="skills" className="py-24 px-6 bg-cream-100/60 dark:bg-ink-800/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4 reveal">Skills</p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-ink-900 dark:text-cream-100 mb-16 reveal reveal-delay-1">
          The technical stack.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}>
              <p className="font-mono text-xs text-gold-500 mb-4 uppercase tracking-widest">{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s, j) => (
                  <span
                    key={j}
                    className="skill-pill text-ink-600 dark:text-ink-300 border-ink-200/60 dark:border-ink-600/60 hover:border-gold-400 hover:text-gold-500 dark:hover:text-gold-400"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Publications strip */}
        <div className="mt-20 pt-12 border-t border-ink-200/30 dark:border-ink-700/30 reveal">
          <p className="section-label mb-6">Publications · IEEE</p>
          <div className="space-y-4">
            {[
              'Smart E-Stick for Visually Impaired using Video Intelligence API — IEEE IBSSC 2019',
              'Advanced Image Analysis and Its Applications — IEEE GCAT 2019',
              'Smart E-Stick using Android App and Cloud Vision API — IEEE GCAT 2019',
              'MQTT Quality of Service — Research Paper',
            ].map((pub, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-gold-400 font-mono text-xs mt-1 shrink-0">[{String(i + 1).padStart(2, '0')}]</span>
                <p className="font-body text-sm text-ink-500 dark:text-ink-400">{pub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
