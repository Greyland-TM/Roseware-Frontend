"use client";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LoginForm from "../auth/LoginForm";
import { AuthContext } from "../auth/AuthContext";

export default function Nav() {
  const pathName = usePathname();
  const modalRef = useRef<HTMLDialogElement>(null);
  const ctx = useContext(AuthContext);
  const dispatch = ctx.dispatch;
  const router = useRouter();

  const handleLoginClicked = () => {
    const modal: HTMLDialogElement | null = modalRef.current;
    modal?.showModal();
  };

  const closeModal = () => {
    const modal: HTMLDialogElement | null = modalRef.current;
    modal?.close();
  };

  return (
    <>
      <dialog className="min-h-custom backdrop:backdrop-blur" ref={modalRef}>
        <LoginForm
          closeModal={closeModal}
          dispatch={dispatch}
          router={router}
        />
      </dialog>
      
      <Disclosure
        as="nav"
        className="h-16 sticky top-0 z-50 opacity-95 backdrop-blur text-black shadow-md"
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
                            ? "bg-zinc-800 text-white"
                            : ""
                        } transition ease-in-out duration-200 rounded-md text-lg px-3 py-1 font-medium text-black hover:bg-gray-700 hover:text-white`}
                      >
                        Services
                      </Link>
                      <Link
                        href="/contact"
                        className={`${
                          pathName === "/contact"
                            ? "bg-zinc-800 text-white"
                            : ""
                        } transition ease-in-out duration-200 rounded-md text-lg px-3 py-1 font-medium text-black hover:bg-gray-700 hover:text-white`}
                      >
                        Contact
                      </Link>
                      <Link
                        href="/about"
                        className={`${
                          pathName === "/about" ? "bg-zinc-800 text-white" : ""
                        } transition ease-in-out duration-200 rounded-md text-lg px-3 py-1 font-medium text-black hover:bg-gray-700 hover:text-white`}
                      >
                        About
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                    {!ctx.isLoggedIn ? (
                      <div className="md:flex hidden">
                        <button
                          onClick={handleLoginClicked}
                          className="w-24 mr-2 rounded-md bg-rose-950 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                        >
                          Sign In
                        </button>
                        <Link
                          href="/auth/register"
                          className=" text-center w-24 rounded-md bg-rose-950 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                        >
                          Sign Up
                        </Link>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          dispatch({ type: "LOGOUT" });
                        }}
                        className="hidden md:block w-24 mr-2 text-center rounded-md bg-rose-950 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                      >
                        Logout
                      </button>
                    )}
                  <Disclosure.Button className="md:hidden relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
            <Disclosure.Panel className="md:hidden absolute right-0 rounded-lg w-1/4 bg-gray-900 text-black opacity-100">
              <div className="space-y-1 px-2 pb-3 pt-2 text-right">
                <Disclosure.Button
                  as={Link}
                  href="/services"
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-300 hover:text-black"
                >
                  Services
                </Disclosure.Button>
                <Disclosure.Button
                  as={Link}
                  href="/contact"
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-300 hover:text-black"
                >
                  Contact
                </Disclosure.Button>
                <Disclosure.Button
                  as={Link}
                  href="/about"
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-300 hover:text-black"
                >
                  About
                </Disclosure.Button>
                <div className="flex flex-col justify-center border-t border-gray-500 pt-3 mx-4">
                  {ctx.isLoggedIn === false ? (
                    <>
                      <Disclosure.Button
                        as={Link}
                        onClick={handleLoginClicked}
                        href="#"
                        className=" w-full mx-auto mb-2 text-center mr-2 rounded-md bg-rose-950 px-2.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                      >
                        Sign In
                      </Disclosure.Button>
                      <Disclosure.Button
                        as={Link}
                        href="#"
                        className="w-full mx-auto text-center mr-2 rounded-md bg-rose-950 px-2.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                      >
                        Sign Up
                      </Disclosure.Button>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch({ type: "LOGOUT" });
                      }}
                      className="w-full mx-auto text-center rounded-md bg-rose-950 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                    >
                      Logout
                    </button>
                  )}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
