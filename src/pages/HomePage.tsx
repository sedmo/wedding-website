import { Hero } from '@/components/Hero'
import { EventDetails } from '@/components/EventDetails'
import { OurStory } from '@/components/OurStory'
import { PhotoGallery } from '@/components/PhotoGallery'
import { FAQ } from '@/components/FAQ'
import { RSVPSection } from '@/components/RSVPSection'
import { Contact } from '@/components/Contact'

export function HomePage() {
  return (
    <>
      <Hero />
      <EventDetails />
      <OurStory />
      <PhotoGallery />
      <FAQ />
      <RSVPSection />
      <Contact />
    </>
  )
}
