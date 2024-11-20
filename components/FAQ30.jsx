const faqs = [
  {
    id: 1,
    question: "When does the programme start?",
    answer:
      "You can start as soon as buy it. An invitation will be sent via email. Then, sign up and click Start to begin.",
  },
  {
    id: 2,
    question: "Can I buy it and start later?",
    answer:
      "Yes.",
  },
  {
    id: 3,
    question: "Does it expire?",
    answer:
      "No.",
  },
  {
    id: 4,
    question: "Can I come back and re-practice the habits?",
    answer:
      "Yes.",
  },
  {
    id: 5,
    question: "I have not finished reading the book. Can I start?",
    answer:
      "Yes. Every exercise comes with a short explanation of the habit before you practice. If you need more context, read the relevant chapter for the day.",
  },
  {
    id: 6,
    question: "I do not have the book. Can I start?",
    answer:
      "Yes. Every exercise comes with a short explanation of the habit before you practice. If you need more context, read the book.",
  },
  {
    id: 7,
    question: "Where can I buy The Quiet Achiever book?",
    answer:
      "You can buy it on our website or good booksstores everywhere: https://www.thequietachievr.com/book",
  },
  {
    id: 8,
    question: "I'm very busy. Does this take a lot of time?",
    answer:
      "No. Each daily habit is bite-sized should not take more than 5 minutes to complete.",
  },
  {
    id: 9,
    question: "What happens if I miss a day?",
    answer:
      "The content will still be accessible online. Come back and practice another day.",
  },
  {
    id: 10,
    question: "Can I buy this for a friend?",
    answer:
      "Yes. Use [Gift It] to include a gift message sent via email to the recipient. Alternatively, [Buy it] and use the gift recipient's email address instead.",
  },
  {
    id: 11,
    question: "I'm nervous about practicing these habits in front of other people. Should I still join?",
    answer:
      "Yes, I understand. I was nervous too. You just have to realise that no one ever sees your bad takes; they only see your best take; and the more you practice, the better you will get. You just have to trust the process, embrace the challenge and keep on practicing. You don't have to do it all on your own.",
  },
  // More questions...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Frequently asked questions</h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-xl font-semibold text-gray-900 lg:col-span-5">{faq.question}</dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-xl text-gray-800">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}