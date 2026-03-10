import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { personalInfo } from '../data/portfolioData'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const techBadges = ['AWS', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions']

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
                 bg-surface-base bg-hero-grid bg-grid"
    >
      {/* Radial purple glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,58,237,0.08) 0%, transparent 70%)',
        }}
      />

      <motion.div
        className="section-container relative z-10 text-center py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={itemVariants} className="section-subheading">
          HELLO - I'M
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight"
        >
          {/* TODO: Name is pulled from portfolioData.js → personalInfo.name */}
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl font-bold mb-6
                     bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent"
        >
          {personalInfo.title}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="projects" smooth duration={700} offset={-64}>
            <button className="btn-primary text-base w-full sm:w-auto">View My Work</button>
          </Link>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base text-center"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Tech stack pill badges */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-wrap gap-2 justify-center"
        >
          {techBadges.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono bg-surface-elevated border border-surface-border
                         text-accent-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <svg
          className="w-6 h-6 text-accent-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  )
}
