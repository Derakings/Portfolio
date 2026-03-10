import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { introVideo } from '../data/portfolioData'

export default function IntroVideo() {
  const { ref, isInView } = useScrollAnimation()

  // TODO: Update youtubeId in src/data/portfolioData.js with your real YouTube video ID
  const embedUrl = `https://www.youtube-nocookie.com/embed/${introVideo.youtubeId}?rel=0&modestbranding=1&color=white`

  return (
    <section id="video" className="py-24 bg-surface-card">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-subheading text-center block">Get to Know Me</span>
          <h2 className="section-heading text-center mb-4">{introVideo.title}</h2>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
            {introVideo.description}
          </p>

          {/* Responsive 16:9 YouTube embed */}
          <div className="max-w-3xl mx-auto">
            <div
              className="relative w-full rounded-xl overflow-hidden glow-border shadow-2xl shadow-accent-900/30"
              style={{ aspectRatio: '16 / 9' }}
            >
              <iframe
                src={embedUrl}
                title={introVideo.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
