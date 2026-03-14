import { MapPinIcon, ClockIcon } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function EventDetails() {
  return (
    <section id="details" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Wedding Details
          </h2>
          <Separator className="w-24 mx-auto bg-primary h-0.5" />
        </div>

        {/* Jamaica photo strip */}
        <div className="grid grid-cols-3 gap-3 mb-16 max-w-3xl mx-auto">
          <img
            src="/photos/gallery/jamaica-09.jpeg"
            alt="Engagement in Jamaica"
            className="rounded-xl object-cover aspect-[3/4] w-full"
          />
          <img
            src="/photos/gallery/jamaica-02.jpeg"
            alt="Engagement in Jamaica"
            className="rounded-xl object-cover aspect-[3/4] w-full"
          />
          <img
            src="/photos/gallery/jamaica-04.jpeg"
            alt="Engagement in Jamaica"
            className="rounded-xl object-cover aspect-[3/4] w-full"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Date & Time */}
          <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                <ClockIcon weight="fill" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">When</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="text-lg font-medium text-foreground">
                  November 25, 2026
                </p>
                <p className="text-lg">
                  4:00 PM - 10:00 PM
                </p>
              </div>
            </div>
          </Card>

          {/* Venue */}
          <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                <MapPinIcon weight="fill" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Where</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="text-lg font-medium text-foreground">Paradise Cove</p>
                <p className="text-base">
                  13245 Lake Bryan Drive<br />
                  Orlando, FL 32821
                </p>
              </div>
            </div>
          </Card>

          {/* Attire */}
          <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">👗</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Attire</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="text-lg font-medium text-foreground">Cocktail Attire</p>
                <p className="text-base">
                  Please dress to impress!
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.5!2d-81.5117!3d28.3517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd7f2a0b3b3b3b%3A0x0!2s13245+Lake+Bryan+Dr%2C+Orlando%2C+FL+32821!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Paradise Cove location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
