import Link from "next/link";

export default function pageError() {
  return (
    <div className="h-[calc(100vh-4rem)] lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="relative">
              <h1 className="text-7xl">404</h1>
              <h2 className="my-2 text-gray-800 dark:text-rose-600 font-bold text-2xl">
                Looks like you've found the doorway to the great nothing
              </h2>
              <p className="my-2 text-zinc-400">
                Sorry about that! Please visit our hompage to get where you need
                to go.
              </p>
              <button className="sm:w-full lg:w-auto my-2  rounded md py-4 px-8 text-center bg-Vine text-white hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:ring-opacity-50">
                <Link href="/">Go Home</Link>
              </button>
          <div>
          </div>
        </div>
      <div>
      </div>
    </div>
  );
}
