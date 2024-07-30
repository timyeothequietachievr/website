import { StarIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <figure className="mx-auto max-w-2xl">
        <p className="sr-only">5 out of 5 stars</p>
        <div className="flex gap-x-1 text-indigo-600">
          <StarIcon aria-hidden="true" className="h-5 w-5 flex-none" />
          <StarIcon aria-hidden="true" className="h-5 w-5 flex-none" />
          <StarIcon aria-hidden="true" className="h-5 w-5 flex-none" />
          <StarIcon aria-hidden="true" className="h-5 w-5 flex-none" />
          <StarIcon aria-hidden="true" className="h-5 w-5 flex-none" />
        </div>
        <blockquote className="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
          <p>
            “Qui dolor enim consectetur do et non ex amet culpa sint in ea non dolore. Enim minim magna anim id minim eu
            cillum sunt dolore aliquip. Amet elit laborum culpa irure incididunt adipisicing culpa amet officia
            exercitation. Eu non aute velit id velit Lorem elit anim pariatur.”
          </p>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-x-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80"
            className="h-12 w-12 rounded-full bg-gray-50"
          />
          <div className="text-sm leading-6">
            <div className="font-semibold text-gray-900">Judith Black</div>
            <div className="mt-0.5 text-gray-600">CEO of Workcation</div>
          </div>
        </figcaption>
      </figure>
    </section>
  )
}
Grid

Preview

Code


const featuredTestimonial = {
  body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
  author: {
    name: 'Brenna Goyette',
    handle: 'brennagoyette',