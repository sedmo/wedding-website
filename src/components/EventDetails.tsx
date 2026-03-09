import { MapPin, Clock } from '@phosphor-icons/react'
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
            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&h=500&fit=crop"
            alt="Engagement in Jamaica"
            className="rounded-xl object-cover aspect-[3/4] w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=500&fit=crop"
            alt="Engagement in Jamaica"
            className="rounded-xl object-cover aspect-[3/4] w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&h=500&fit=crop"
            alt="Engagement in Jamaica"
            className="rounded-xl object-cover aspect-[3/4] w-full"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Date & Time */}
          <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                <Clock weight="fill" className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">When</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="text-lg font-medium text-foreground">
                  October 17, 2026
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
                <MapPin weight="fill" className="w-8 h-8 text-primary" />
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
      </div>
    </section>
  )
}
