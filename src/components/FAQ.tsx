import { QuestionIcon } from '@phosphor-icons/react'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const faqs = [
  {
    question: 'What is the dress code?',
    answer: 'Cocktail attire. Please dress to impress!'
  },
  {
    question: 'Can I bring a plus one?',
    answer: 'Please refer to your invitation for details on plus ones. If you have questions, feel free to reach out to us.'
  },
  {
    question: 'Is there parking at the venue?',
    answer: 'Yes, Paradise Cove has complimentary parking available for all guests.'
  },
  {
    question: 'Will there be a shuttle from the hotel?',
    answer: 'Yes! If you stay at the Holiday Inn Resort Orlando Lake Buena Vista, a free shuttle will depart at 3:30 PM on the wedding day and will bring you back at the end of the night.'
  },
  {
    question: 'When should I RSVP by?',
    answer: 'Please RSVP by September 26, 2026 — 60 days before the wedding.'
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <QuestionIcon weight="fill" className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            FAQ
          </h2>
          <Separator className="w-24 mx-auto bg-primary h-0.5" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {faq.question}
              </h3>
              <p className="text-muted-foreground">
                {faq.answer}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
