import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "When does the programme start?",
    answer:
      "You can start as soon as buy it. An invitation will be sent via email. Then, sign up and click Start to begin: https://members.thequietachievr.com/c/30/",
  },
  {
    question: "Can I buy it and start later?",
    answer:
      "Yes.",
  },
  {
    question: "Does it expire?",
    answer:
      "No.",
  },
  {
    question: "Can I come back and re-practice the habits?",
    answer:
      "Yes.",
  },
  {
    question: "I have not finished reading the book. Can I start?",
    answer:
      "Yes. Every exercise comes with a short explanation of the habit before you practice. If you need more context, read the relevant chapter for the day.",
  },
  {
    question: "I do not have the book. Can I start?",
    answer:
      "Yes. Every exercise comes with a short explanation of the habit before you practice. If you need more context, read the book.",
  },
  {
    question: "Where can I buy The Quiet Achiever book?",
    answer:
      "You can buy it on our website or good booksstores everywhere: https://www.thequietachievr.com/book",
  },
  {
    question: "I'm very busy. Does this take a lot of time?",
    answer:
      "No. Each daily habit is bite-sized should not take more than 5 minutes to complete.",
  },
  {
    question: "What happens if I miss a day?",
    answer:
      "The content will still be accessible online. Come back and practice another day.",
  },
  {
    question: "Can I buy this for a friend?",
    answer:
      "Yes. Use [Gift It] to include a gift message sent via email to the recipient. Alternatively, [Buy it] and use the gift recipient's email address instead.",
  },
  {
    question: "I'm nervous about practicing these habits in front of other people. Should I still join?",
    answer:
      "Yes, I understand. I was nervous too. You just have to realise that no one ever sees your bad takes; they only see your best take; and the more you practice, the better you will get. You just have to trust the process, embrace the challenge and keep on practicing. You don't have to do it all on your own.",
  },
  // More questions...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 [.group:not([data-open])_&]:hidden" />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
