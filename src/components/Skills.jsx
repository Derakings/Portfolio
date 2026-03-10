import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { skills, certifications } from '../data/portfolioData'

export default function Skills() {
  const [activeTab, setActiveTab] = useState('skills')
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="skills" className="py-24 bg-surface-card">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subheading text-center">What I Work With</span>
          <h2 className="section-heading text-center mb-8">Skills & Certifications</h2>

          {/* Tab switcher */}
          <div className="flex justify-center gap-2 mb-12">
            {['skills', 'certifications'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-accent-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                    : 'bg-surface-elevated text-gray-400 hover:text-white border border-surface-border cursor-pointer'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'skills' ? (
              <motion.div
                key="skills"
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Skills are configured in src/data/portfolioData.js → skills */}
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-surface-base border border-surface-border rounded-xl p-6
                               hover:border-accent-600/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.1)]
                               transition-all duration-300 group"
                  >
                    <h3 className="text-white font-semibold mb-4 group-hover:text-accent-400 transition-colors text-sm">
                      {skill.category}
                    </h3>
                    <ul className="space-y-2">
                      {skill.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="certs"
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* TODO: Certifications are configured in src/data/portfolioData.js → certifications */}
                {certifications.map((cert, i) => (
                  <motion.a
                    key={cert.name}
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-surface-base border border-surface-border rounded-xl p-6
                               flex flex-col items-center text-center gap-4
                               hover:border-accent-500/50 transition-all duration-300
                               hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]"
                  >
                    <img
                      src={cert.badgeUrl}
                      alt={cert.name}
                      className="w-24 h-24 object-contain"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-white font-semibold text-sm">{cert.name}</p>
                      <p className="text-gray-500 text-xs mt-1">
                        {cert.issuer} — {cert.year}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
