const featuredTestimonial = {
    body: 'Tim is extremely approachable with practical tactics to drive success. Most importantly, I got the feeling Tim has been in my shoes before many times as a designer.',
    author: {
      name: 'Rod Naber',
      handle: 'Lead Product Designer, Stripe, USA',
      imageUrl:
        'src/profile-rod.jpg',
      logoUrl: '',
    },
  }
  const testimonials = [
    [
      [
        {
          body: 'Every day, I felt like I was putting on a mask 🎭, pretending to be someone else. But with each passing day, that mask got heavier and heavier, until I could not lift and put on that mask anymore. I was pretending to be someone I was not.',
          author: {
            name: 'Chapter: Introduction',
            handle: 'lesliealexander',
            imageUrl:
              'src/profile-TQABook.jpg',
          },
        },
        {
            body: 'Walk the room - do not just stand at one spot and stare at your phone. Walk and room and increase your surface area to increase your chances of interesting people you could meet. ',
            author: {
              name: 'Chapter: Networking in-person',
              handle: 'lesliealexander',
              imageUrl:
                'src/profile-TQABook.jpg',
            },
          },
          {
            body: 'Saying no is hard, but saying no serves you. If everything else fails, no is a complete sentence.',
            author: {
              name: 'Chapter: Saying no (politely)',
              handle: 'lesliealexander',
              imageUrl:
                'src/profile-TQABook.jpg',
            },
          },
        // More testimonials...
      ],
      [
        {
          body: 'The louder voices in the room seemed to say the most 😲, but did not always have the most to say. 🫤',
          author: {
            name: 'Chapter: Meetings',
            handle: 'lindsaywalton',
            imageUrl:
              'src/profile-TQABook.jpg',
          },
        },
        {
            body: 'If a tree falls in a forest and no one hears it, does it exist? 🤔 If a quiet achiever sits in a meeting with an idea in his head but does not share it, does it exist? 🧐',
            author: {
              name: 'Chapter: Public speaking',
              handle: 'lindsaywalton',
              imageUrl:
                'src/profile-TQABook.jpg',
            },
          },
          {
            body: '"The best time to look for a job is when you do not need one. The second best time is now.',
            author: {
              name: 'Chapter: Networking remotely',
              handle: 'tomcook',
              imageUrl:
               'src/profile-TQABook.jpg', 
            },
          },
        // More testimonials...
      ],
    ],
    [
      [
        {
          body: 'Constantly comparing myself to others and living someone elses version of success was my recipe for misery.',
          author: {
            name: 'Chapter: Networking',
            handle: 'tomcook',
            imageUrl:
              'src/profile-TQABook.jpg',
          },
        },
        {
            body: 'The truth is most people are terrible at giving feedback. If you truly believe that feedback is a gift, then most people give terrible gifts.',
            author: {
              name: 'Chapter: Giving hard feedback',
              handle: 'lindsaywalton',
              imageUrl:
                'src/profile-TQABook.jpg',
            },
          },
          {
            body: 'For years, I struggled to manage my introversion. I received feedback from my bosses like “You should speak up more in meetings,” but I did not know how. I found myself in rooms full of people with strong opinions and loud voices, and I did not know how to be heard.',
            author: {
              name: 'Chapter: Introduction',
              handle: 'tomcook',
              imageUrl:
                'src/profile-TQABook.jpg',
            },
          },
        // More testimonials...
      ],
      [
        {
          body: 'You are not changing who you are; you are showing up as the best version of yourself.',
          author: {
            name: 'Chapter: Meetings',
            handle: 'leonardkrasner',
            imageUrl:
              'src/profile-TQABook.jpg',
          },
        },
        {
            body: 'When making small talk, I realised I did not need to be interesting, I needed to be relatable. To be relatable, I needed to have things in common with my audience.',
            author: {
              name: 'Chapter: Small talk',
              handle: 'leonardkrasner',
              imageUrl:
                'src/profile-TQABook.jpg',
            },
          },
          {
            body: 'Your team exhibits the worst behaviour you choose to accept or leave unaddressed. Choosing not to address a bad behaviour is a slippery slope to even worse behaviour later.',
            author: {
              name: 'Chapter: Handling difficult conversations',
              handle: 'leonardkrasner',
              imageUrl:
                'src/profile-TQABook.jpg',
            },
          },
        // More testimonials...
      ],
    ],
  ]
    

  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Example() {
    return (
      <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600 sm:text-5xl">Quotes from the book</h2>
            {/*<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We have worked with thousands of amazing people
            </p>*/}
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                {/*<img
                  alt=""
                  src={featuredTestimonial.author.imageUrl}
                  className="h-10 w-10 flex-none rounded-full bg-gray-50"
                />*/}
                <div className="flex-auto">
                  <div className="font-semibold">{featuredTestimonial.author.name}</div>
                  {/*<div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>*/}
                </div>
                <img alt="" src={featuredTestimonial.author.logoUrl} className="h-10 w-auto flex-none" />
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2'
                        : 'xl:row-start-1',
                      'space-y-8',
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={testimonial.author.handle}
                        className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                      >
                        <blockquote className="text-gray-900">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                          {/*<img alt="" src={testimonial.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />*/}
                          <div>
                            <div className="font-semibold">{testimonial.author.name}</div>
                            {/*<div className="text-gray-600">{`@${testimonial.author.handle}`}</div>*/}
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }