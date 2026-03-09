import { Hero } from '@/components/Hero'
import { EventDetails } from '@/components/EventDetails'
import { PhotoGallery } from '@/components/PhotoGallery'
import { RSVPSection } from '@/components/RSVPSection'

export function HomePage() {
  return (
    <>
      <Hero />
      <EventDetails />
      <PhotoGallery />
      <RSVPSection />
    </>
  )
}
