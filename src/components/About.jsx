import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { personalInfo, stats } from '../data/portfolioData'

export default function About() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="about" className="py-24 bg-surface-base">
      <div className="section-container">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-600 to-accent-900
                              blur-2xl opacity-30 scale-110"
              />
              {/* TODO: Replace /profile.jpg with your actual photo in the /public directory */}
              <img
                src={personalInfo.photoUrl}
                alt={personalInfo.photoAlt}
                className="relative w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-2xl
                           border-2 border-accent-600/40"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              {/* Fallback placeholder if photo not found */}
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl border-2 border-accent-600/40
                           bg-surface-elevated items-center justify-center flex-col gap-2"
                style={{ display: 'none' }}
              >
                <svg className="w-20 h-20 text-accent-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
                <p className="text-xs text-gray-600 font-mono">Add /public/profile.jpg</p>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="section-subheading">About Me</span>
            <h2 className="section-heading mb-6">
              Cloud Engineer.{' '}
              <span className="text-accent-400">Builder. Problem Solver.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              {/* TODO: Bio is set in src/data/portfolioData.js → personalInfo.bio */}
              {personalInfo.bio}
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              {/* TODO: Stats numbers are in portfolioData.js → stats */}
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-surface-card border border-surface-border rounded-xl p-4 text-center"
                >
                  <span className="block text-2xl font-bold text-accent-400">{stat.number}</span>
                  <span className="block text-xs text-gray-500 mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
