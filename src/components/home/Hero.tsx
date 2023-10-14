import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden">

     
      <div className="min-h-custom mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 flex justify-center lg:px-8 md:py-40">
        <div className="flex justify-center flex-col items-left lg:flex-shrink-0 pb-4">
          <h1 className="font-display text-5xl font-medium text-slate-900 md:text-6xl lg:text-7xl tracking-tighter">
            <span className="relative sm:whitespace-nowrap  sm:break-words">
              <span className="relative">Roseware Integrations</span><br/>
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-black">
            Where Portland craftsmanship meets everyday business solutions
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link 
              href='/contact' 
              className="rounded-md bg-Vine px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
            >
              Get In Touch
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
