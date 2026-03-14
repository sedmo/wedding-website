import { EnvelopeSimpleIcon, PhoneIcon } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Questions?
          </h2>
          <Separator className="w-24 mx-auto bg-primary h-0.5 mb-4" />
          <p className="text-muted-foreground">
            Don't hesitate to reach out — we're happy to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 text-center">
            <EnvelopeSimpleIcon weight="fill" className="w-8 h-8 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-2">Email</h3>
            <a href="mailto:amhn3c@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              amhn3c@gmail.com
            </a>
          </Card>
          <Card className="p-6 text-center">
            <PhoneIcon weight="fill" className="w-8 h-8 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <a href="tel:+13192393757" className="text-muted-foreground hover:text-primary transition-colors">
              +1 (319) 239-3757
            </a>
          </Card>
        </div>
      </div>
    </section>
  )
}
