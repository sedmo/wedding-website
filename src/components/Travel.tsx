import { AirplaneTakeoff, MapPin, Phone, Globe, Bus } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

export function Travel() {
  return (
    <section className="pt-24 pb-20 md:pb-32 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Header with Jamaica photo banner */}
        <div className="relative rounded-2xl overflow-hidden mb-16 h-64 md:h-80">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400&h=600&fit=crop"
            alt="Tropical palm trees"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-10">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Travel</h1>
              <p className="text-lg opacity-90">Everything you need for your trip to Orlando</p>
            </div>
          </div>
        </div>

        {/* Airports */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <AirplaneTakeoff weight="fill" className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Airports</h2>
          </div>
          <Separator className="w-24 bg-primary h-0.5 mb-8" />

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Orlando International Airport (MCO)</h3>
              <p className="text-muted-foreground">
                Approximately <span className="font-medium text-foreground">18 minutes</span> from Paradise Cove
              </p>
            </Card>
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-2">Sanford Orlando Airport</h3>
              <p className="text-muted-foreground">
                Approximately <span className="font-medium text-foreground">45 minutes</span> from Paradise Cove
              </p>
            </Card>
          </div>
        </div>

        {/* Hotels */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <MapPin weight="fill" className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Hotel Recommendations</h2>
          </div>
          <Separator className="w-24 bg-primary h-0.5 mb-8" />

          <div className="space-y-8">
            {/* Hotel 1 - Holiday Inn */}
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4">
                    Holiday Inn Resort Orlando Lake Buena Vista
                    <span className="text-sm font-normal text-muted-foreground ml-2">by IHG</span>
                  </h3>

                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin weight="fill" className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p>13351 Kissimmee Vineland Rd, Orlando, FL 32821</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone weight="fill" className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href="tel:+14072394500" className="hover:text-primary transition-colors">(407) 239-4500</a>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium bg-secondary px-3 py-1 rounded-full">
                        Wedding Code: Harrington-Edmonson Wedding
                      </span>
                    </div>
                    <p className="text-lg">
                      <span className="font-semibold text-primary">$142</span>
                      <span className="text-muted-foreground"> per night</span>
                    </p>
                  </div>

                  <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Bus weight="fill" className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-foreground">FREE Shuttle</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      A shuttle will take you to and from the wedding for free. Shuttle will leave for the wedding at approximately 3:30pm wedding day and will pick up wedding guests at the end of the night.
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <Button
                    className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
                    onClick={() => window.open('https://holidayinnresortorlandolakebuenavista.reservationstays.com/hotels/1G4mD0Wq', '_blank')}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </div>
              </div>
            </Card>

            {/* Hotel 2 - Hilton */}
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4">
                    Hilton Vacation Club Grand Beach Orlando
                  </h3>

                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin weight="fill" className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p>8317 Lake Bryan Beach Boulevard, Orlando, Florida, 32821</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone weight="fill" className="w-5 h-5 text-primary flex-shrink-0" />
                      <a href="tel:+18552560288" className="hover:text-primary transition-colors">+1-855-256-0288</a>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium bg-secondary px-3 py-1 rounded-full">
                        Wedding Code: Harrington-Edmonson Wedding
                      </span>
                    </div>
                    <p className="text-lg">
                      <span className="font-semibold text-primary">Daily Rate:</span>
                      <span className="text-muted-foreground"> TBD</span>
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <Button
                    className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90"
                    onClick={() => window.open('https://www.hilton.com/en/hotels/mcobegv-hilton-vacation-club-grand-beach-orlando/', '_blank')}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Jamaica photo accent */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src="https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=400&h=400&fit=crop"
            alt="Jamaica engagement"
            className="rounded-xl object-cover aspect-square w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop"
            alt="Jamaica engagement"
            className="rounded-xl object-cover aspect-square w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop"
            alt="Jamaica engagement"
            className="rounded-xl object-cover aspect-square w-full hidden md:block"
          />
          <img
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=400&fit=crop"
            alt="Jamaica engagement"
            className="rounded-xl object-cover aspect-square w-full hidden md:block"
          />
        </div>
      </div>
    </section>
  )
}
