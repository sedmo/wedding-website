import { useState } from 'react'
import { EnvelopeSimpleIcon, CheckIcon } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'

const FORMSPREE_ID = 'mlgpggea'

export function RSVPSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes' as 'yes' | 'no',
    guestCount: 1,
    dietaryRestrictions: '',
    songRequest: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email) {
      toast.error('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          attending: formData.attending === 'yes' ? 'Joyfully accepts' : 'Regretfully declines',
          guestCount: formData.attending === 'yes' ? formData.guestCount : 0,
          dietaryRestrictions: formData.dietaryRestrictions || 'None',
          songRequest: formData.songRequest || 'No request',
          message: formData.message || 'No message',
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        toast.success('RSVP submitted successfully!')
        setFormData({
          name: '',
          email: '',
          attending: 'yes',
          guestCount: 1,
          dietaryRestrictions: '',
          songRequest: '',
          message: ''
        })
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="rsvp" className="py-20 md:py-32 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <EnvelopeSimpleIcon weight="fill" className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            RSVP
          </h2>
          <Separator className="w-24 mx-auto bg-primary h-0.5 mb-4" />
          <p className="text-lg text-muted-foreground">
            We can't wait to celebrate with you! Please let us know if you'll be joining us.
          </p>
        </div>

        <Card className="p-8 md:p-12">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckIcon weight="bold" className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
              <p className="text-muted-foreground">
                Your RSVP has been received. We look forward to celebrating with you!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="rsvp-name">Full Name *</Label>
                <Input
                  id="rsvp-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="rsvp-email">Email Address *</Label>
                <Input
                  id="rsvp-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="space-y-3">
                <Label>Will you be attending? *</Label>
                <RadioGroup
                  value={formData.attending}
                  onValueChange={(value) => setFormData({ ...formData, attending: value as 'yes' | 'no' })}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="attending-yes" />
                    <Label htmlFor="attending-yes" className="font-normal cursor-pointer">
                      Joyfully accepts
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="attending-no" />
                    <Label htmlFor="attending-no" className="font-normal cursor-pointer">
                      Regretfully declines
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.attending === 'yes' && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="guest-count">Number of Guests</Label>
                    <Input
                      id="guest-count"
                      type="number"
                      min="1"
                      max="10"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: parseInt(e.target.value) || 1 })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dietary">Dietary Restrictions</Label>
                    <Input
                      id="dietary"
                      value={formData.dietaryRestrictions}
                      onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                      placeholder="Vegetarian, vegan, allergies, etc."
                    />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label htmlFor="song-request">Song Request (Optional)</Label>
                <Input
                  id="song-request"
                  value={formData.songRequest}
                  onChange={(e) => setFormData({ ...formData, songRequest: e.target.value })}
                  placeholder="What song will get you on the dance floor?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message to the Couple (Optional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your excitement or well wishes..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
              </Button>
            </form>
          )}
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Please RSVP by September 26, 2026
        </p>
      </div>
    </section>
  )
}
