"use client";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LoginForm from "../auth/LoginForm";

export default function Nav() {
  const pathName = usePathname();
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleLoginClicked = () => {
    const modal: HTMLDialogElement | null = modalRef.current;
    modal?.showModal();
  };

  return (
    <>
      <dialog className="min-h-custom" ref={modalRef}>
        <LoginForm />
      </dialog>

      <Disclosure as="nav" className="bg-zinc-900 h-16">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-[4rem] items-center justify-between">
                <div className="flex items-center w-auto">
                  <div className="flex-shrink-0">
                    <Link href="/">
                      <div className={`flex items-center justify-center p-1 rounded-full bg-rose-200 h-12 w-12`}>
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
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <Link
                        href="/services"
                        className={`${
                          pathName === "/services"
                            ? "bg-rose-100 text-zinc-950"
                            : ""
                        } transition ease-in-out duration-200 rounded-md text-lg px-3 py-1 font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                      >
                        Services
                      </Link>
                      <Link
                        href="/contact"
                        className={`${
                          pathName === "/contact"
                            ? "bg-rose-100 text-zinc-950"
                            : ""
                        } transition ease-in-out duration-200 rounded-md text-lg px-3 py-1 font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                      >
                        Contact
                      </Link>
                      <Link
                        href="/about"
                        className={`${
                          pathName === "/about"
                            ? "bg-rose-100 text-zinc-950"
                            : ""
                        } transition ease-in-out duration-200 rounded-md text-lg px-3 py-1 font-medium text-gray-300 hover:bg-gray-700 hover:text-white`}
                      >
                        About
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <button
                    onClick={handleLoginClicked}
                    className="w-24 h-8 mx-2 rounded-md bg-rose-700 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                  >
                    Sign In
                  </button>

                  <Link
                  href="/auth/register"
                    className="w-24 h-8 mx-2 rounded-md bg-rose-700 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                  >
                    Sign Up
                  </Link>
                </div>
                <div className="-mr-2 flex sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Mobile Nav */}
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 text-right">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Disclosure.Button
                  as={Link}
                  href="/projects"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Projects
                </Disclosure.Button>
                <Disclosure.Button
                  as={Link}
                  href="/contact"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Contact
                </Disclosure.Button>
                <Disclosure.Button
                  as={Link}
                  href="/about"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
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
