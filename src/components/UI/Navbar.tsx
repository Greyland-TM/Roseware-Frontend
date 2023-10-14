"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Nav() {
  const pathName = usePathname();

  return (
    <>
      <Disclosure
        as="nav"
        className="h-16 sticky top-0 z-50 opacity-95 backdrop-blur text-black shadow"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <Link href="/">
                  <div className={`p-1 rounded-full bg-gray-300 h-12 w-12`}>
                    <Image
                      className="inline-block rounded-full h-full w-full"
                      src="/roseware-logo-3.png"
                      alt="roseware home"
                      width="647"
                      height="627"
                      priority
                    />
                  </div>
                </Link>
                <div className="hidden md:flex justify-between items-center w-full gap-1 lg:gap-3">
                  <div>
                    <div className="flex space-x-4 mx-4">
                      <Link
                        href="/services"
                        className={`${
                          pathName === "/services"
                            ? "bg-zinc-600 text-white"
                            : ""
                        } transition ease-in-out duration-200 rounded-md text-lg px-3 py-1 font-medium text-black hover:bg-gray-700 hover:text-white`}
                      >
                        Services
                      </Link>
                      <Link
                        href="/contact"
                        className={`${
                          pathName === "/contact"
                            ? "bg-zinc-600 text-white"
                            : ""
                        } transition ease-in-out duration-200 rounded-md text-lg px-3 py-1 font-medium text-black hover:bg-gray-700 hover:text-white`}
                      >
                        Contact
                      </Link>
                      <Link
                        href="/about"
                        className={`${
                          pathName === "/about" ? "bg-zinc-600 text-white" : ""
                        } transition ease-in-out duration-200 rounded-md text-lg px-3 py-1 font-medium text-black hover:bg-gray-700 hover:text-white`}
                      >
                        About
                      </Link>
                    </div>
                  </div>
                </div>
                <Disclosure.Button className="md:hidden relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
                <div className="md:flex hidden">
                  <button className="w-24 mr-2 rounded-md bg-rose-800 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">
                    Sign In
                  </button>
                  <button className="w-24 rounded-md bg-rose-800 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Nav */}
            <Disclosure.Panel className="md:hidden absolute right-0 rounded-lg bg-gray-100 w-1/2 ">
              <div className="space-y-1 px-2 pb-3 pt-2 text-right">
                <Disclosure.Button
                  as={Link}
                  href="/services"
                  className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-black"
                >
                  Services
                </Disclosure.Button>
                <Disclosure.Button
                  as={Link}
                  href="/contact"
                  className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-black"
                >
                  Contact
                </Disclosure.Button>
                <Disclosure.Button
                  as={Link}
                  href="/about"
                  className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-black"
                >
                  About
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
