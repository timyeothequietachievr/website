/* This example requires Tailwind CSS v2.0+ */
import { VideoCameraIcon, CalendarIcon, UserCircleIcon, ClockIcon } from '@heroicons/react/outline'

const people = [
  {
    name: 'Amazon →',
    role: '',
    imageUrl:
      'src/profile-amazon.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: 'https://mybook.to/thequietachiever/opt/1?iguid=xN_KmD0QiEGxK5EeEzqvUg',
    linkedinUrl: '#',
  },
  {
    name: 'Kindle →',
    role: '',
    imageUrl:
      'src/profile-kindle.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: 'https://mybook.to/thequietachieverebook/opt/1?iguid=_6mWD2GAuE2wTkgBzKepQg&ireferrer=https%3a%2f%2fbooklinker.com%2f',
    linkedinUrl: '#',
  },
  {
    name: 'Audible (audiobook) →',
    role: '',
    imageUrl:
      'src/profile-audible.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: 'https://www.amazon.com/dp/B0DDW8NKL9',
    linkedinUrl: '#',
  },
  {
    name: 'Spotify (audiobook; soon) →',
    role: '',
    imageUrl:
      'src/profile-spotify.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Kobo →',
    role: '',
    imageUrl:
      'src/profile-kobo.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: 'https://mybook.to/thequietachieverebook/opt/2?iguid=_6mWD2GAuE2wTkgBzKepQg&ireferrer=https%3a%2f%2fbooklinker.com%2f',
    linkedinUrl: '#',
  },
  {
    name: 'Apple Books →',
    role: '',
    imageUrl:
      'src/profile-applebooks.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: 'https://mybook.to/thequietachieverebook/opt/0?iguid=_6mWD2GAuE2wTkgBzKepQg&ireferrer=https%3a%2f%2fbooklinker.com%2f',
    linkedinUrl: '#',
  },
  {
    name: 'Google Play Books →',
    role: '',
    imageUrl:
      'src/profile-googleplay.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: 'https://play.google.com/store/books/details?id=Q4QYEQAAQBAJ',
    linkedinUrl: '#',
  },
  {
    name: 'Barnes & Noble →',
    role: '',
    imageUrl:
      'src/profile-barnesnoble.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: 'https://www.barnesandnoble.com/w/the-quiet-achiever-tim-yeo/1146139287?ean=2940179843696',
    linkedinUrl: '#',
  },
  {
    name: 'Smashwords →',
    role: '',
    imageUrl:
      'src/profile-smashwords.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: 'https://www.smashwords.com/books/view/1600748',
    linkedinUrl: '#',
  },

  // More people...
]

export default function TopicsBook() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 id="goodbookstores" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Also available at the following book stores</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Shipping charges can be costly if you buy a physical book from my website and you are outside of Australia. That's OK; if you can't buy direct from my website, try any of the following book stores:   
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <a href={person.xUrl} target="_blank"><img className="aspect-[3/2] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" /></a>
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                <a 
                href={person.xUrl} target="_blank"
                data-event-category="purchase"
                data-event-action="click_buy_elsewhere"
                data-event-label="cta_book_goodbookstore"
                >{person.name}</a>
              </h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
