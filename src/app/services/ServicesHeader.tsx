import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const supportLinks = [
  {
    name: 'Dashboard',
    href: '#',
    description:
      'This is where everything starts. Free to anyone, you can manage the Roseware Integrations tools and services you have access to. And no matter which services you are interested in, you will always find them here.',
    icon: NewspaperIcon,
  },
  {
    name: 'Tools & Integrations',
    href: '#',
    description:
      'At the moment we only have a few tools available, but we are working on more. As they become available you will find them in the dashboard under the "Integrations" section. ',
    icon: LifebuoyIcon,
  },
  {
    name: 'Apps',
    href: '#',
    description:
      'You can submit existing webistes or apps to be hosted and maintained by us, or request that we build you a brand new custom app. The choice is up to you, and there are no limits.',
    icon: PhoneIcon,
  },
]

export default function ServicesHeader() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-black pb-32">
        <div className="absolute inset-0">
          <Image
            height="1920"
            width="1280"
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""

          />
          <div className="absolute inset-0 bg-gray-700 opacity-80 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl px-16 py-16 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">Services</h1>
          {/* <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui
            laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar.
          </p> */}
        </div>
      </div>

      {/* Overlapping cards */}
      <section className="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-32 lg:px-8" aria-labelledby="contact-heading">
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
              <div className="relative flex-1 px-6 pb-8 pt-16 md:px-8">
                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-Vine-900 p-5 shadow-lg">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              {/* <div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
                <a href={link.href} className="text-base font-medium text-rose-700 hover:text-rose-600">
                  Contact us<span aria-hidden="true"> &rarr;</span>
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
