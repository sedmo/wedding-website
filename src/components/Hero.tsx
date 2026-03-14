import { motion } from 'framer-motion'
import { HeartIcon, CalendarPlusIcon } from '@phosphor-icons/react'
import { CountdownTimer } from '@/components/CountdownTimer'

function getCalendarUrl() {
  const start = '20261125T210000Z' // 4pm EST = 9pm UTC
  const end = '20261126T030000Z'   // 10pm EST = 3am UTC next day
  const details = encodeURIComponent('Wedding celebration of Alicia Harrington & Stephan Edmonson')
  const location = encodeURIComponent('Paradise Cove, 13245 Lake Bryan Drive, Orlando, FL 32821')
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Alicia & Stephan\'s Wedding')}&dates=${start}/${end}&details=${details}&location=${location}`
}

export function Hero() {
  const weddingDate = new Date('2026-11-25T16:00:00')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Jamaica engagement photo */}
      <div className="absolute inset-0">
        <img
          src="/photos/hero.jpeg"
          alt="Jamaica engagement"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 text-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <HeartIcon weight="fill" className="w-12 h-12 mx-auto mb-8 text-white/80" />

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Alicia & Stephan
          </h1>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-white/60" />
            <p className="text-xl md:text-2xl italic text-white/80">
              are getting married
            </p>
            <div className="h-px w-16 bg-white/60" />
          </div>

          <p className="text-2xl md:text-3xl font-medium text-white">
            November 25, 2026
          </p>

          <p className="text-lg md:text-xl text-white/80 mt-2">
            Orlando, Florida
          </p>
        </motion.div>

        <CountdownTimer targetDate={weddingDate} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#rsvp"
              className="inline-block px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-full text-lg font-medium hover:bg-white/30 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              RSVP Now
            </a>
            <a
              href={getCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 rounded-full text-sm font-medium hover:bg-white/20 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <CalendarPlusIcon weight="bold" className="w-5 h-5" />
              Add to Calendar
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
