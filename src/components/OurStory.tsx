import { Separator } from '@/components/ui/separator'

const timeline = [
  {
    year: '2020',
    title: 'How We Met',
    description: 'Update this with your story of how you two met!'
  },
  {
    year: '2022',
    title: 'A Milestone',
    description: 'Add a special memory or milestone from your relationship here.'
  },
  {
    year: '2025',
    title: 'The Proposal',
    description: 'He popped the question in beautiful Jamaica — and she said yes!'
  },
  {
    year: '2026',
    title: 'The Big Day',
    description: "And now we're ready to celebrate our love with all of you at Paradise Cove!"
  }
]

export function OurStory() {
  return (
    <section id="story" className="py-20 md:py-32 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Story
          </h2>
          <Separator className="w-24 mx-auto bg-primary h-0.5" />
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -ml-px" />

          <div className="space-y-12">
            {timeline.map((event, index) => (
              <div key={index} className="relative">
                <div className={`flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                    {index % 2 === 0 && (
                      <div className="pr-12">
                        <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                      {event.year}
                    </div>
                  </div>

                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}>
                      <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
