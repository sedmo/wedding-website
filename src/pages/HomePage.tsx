import { Hero } from '@/components/Hero'
import { EventDetails } from '@/components/EventDetails'
import { PhotoGallery } from '@/components/PhotoGallery'
import { FAQ } from '@/components/FAQ'
import { RSVPSection } from '@/components/RSVPSection'
import { Contact } from '@/components/Contact'

export function HomePage() {
  return (
    <>
      <Hero />
      <EventDetails />
      <PhotoGallery />
      <FAQ />
      <RSVPSection />
      <Contact />
    </>
  )
}
