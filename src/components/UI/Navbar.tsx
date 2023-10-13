"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

export default function Nav() {
  const pathName = usePathname();

  return (
    <>
      <Disclosure as="nav" className="bg-Crimson-950 h-16">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-[4rem] items-center justify-between">
                <div className="flex items-center justify-between w-full gap-1 lg:gap-3">
                  <div className="flex-shrink-0">
                    <Link href="/">
                      <div
                        className={`flex items-center justify-center p-1 rounded-full bg-rose-200 h-12 w-12`}
                      >
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
                    </div>
                  <div>
                    <div className="flex space-x-4">
                      <Link
                        href="/services"
                        className={`${
                          pathName === "/services"
                            ? "bg-white text-zinc-950"
                            : ""
                        } transition ease-in-out duration-200 rounded-md text-lg px-3 py-1 font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                      >
                        Services
                      </Link>
                      <Link
                        href="/contact"
                        className={`${
                          pathName === "/contact"
                            ? "bg-white text-zinc-950"
                            : ""
                        } transition ease-in-out duration-200 rounded-md text-lg px-3 py-1 font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                      >
                        Contact
                      </Link>
                      <Link
                        href="/about"
                        className={`${
                          pathName === "/about"
                            ? "bg-white text-zinc-950"
                            : ""
                        } transition ease-in-out duration-200 rounded-md text-lg px-3 py-1 font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                      >
                        About
                      </Link>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>

            {/* Mobile Nav */}
            
          </>
        )}
      </Disclosure>
    </>
  );
}
