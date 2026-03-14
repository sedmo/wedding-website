import { GiftIcon, MapPinIcon } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

export function Registry() {
  return (
    <section className="pt-24 pb-20 md:pb-32 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header with Jamaica photo banner */}
        <div className="relative rounded-2xl overflow-hidden mb-16 h-64 md:h-80">
          <img
            src="/photos/gallery/jamaica-15.jpeg"
            alt="Jamaica engagement - gazebo kiss"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-10">
            <div className="text-center text-white">
              <GiftIcon weight="fill" className="w-10 h-10 mx-auto mb-3" />
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Registry</h1>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at Amazon.
          </p>
        </div>

        {/* Amazon Registry */}
        <Card className="p-8 md:p-12 hover:shadow-xl transition-shadow duration-300 mb-10">
          <div className="text-center">
            <div className="text-5xl mb-4">🎁</div>
            <h3 className="text-2xl font-semibold mb-4">Amazon Wedding Registry</h3>
            <p className="text-muted-foreground mb-6">
              Browse our wishlist and find the perfect gift
            </p>
            <Button
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 px-8"
              size="lg"
              onClick={() => window.open('https://www.amazon.com/wedding/guest-view/28MXQKZV7KT83', '_blank')}
            >
              View Registry
            </Button>
          </div>
        </Card>

        {/* Mailing Address */}
        <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
              <MapPinIcon weight="fill" className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Mailing Address</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Alicia Harrington<br />
              3815 Calliope Ave<br />
              Port Orange, FL 32129
            </p>
          </div>
        </Card>

        {/* Jamaica photo accent */}
        <div className="mt-16 grid grid-cols-3 gap-4">
          <img
            src="/photos/gallery/jamaica-06.jpeg"
            alt="Jamaica engagement"
            className="rounded-xl object-cover aspect-[4/3] w-full"
          />
          <img
            src="/photos/gallery/jamaica-10.jpeg"
            alt="Jamaica engagement"
            className="rounded-xl object-cover aspect-[4/3] w-full"
          />
          <img
            src="/photos/gallery/jamaica-14.jpeg"
            alt="Jamaica engagement"
            className="rounded-xl object-cover aspect-[4/3] w-full"
          />
        </div>
      </div>
    </section>
  )
}
