"use client";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LoginForm from "../../app/auth/LoginForm";
import { AuthContext } from "../../app/auth/AuthContext";
import { logoutUser } from "../../app/auth/utils";
import NavButtons from "./NavButtons";
import { Puff } from "react-loader-spinner";

export default function Nav() {
  const [loading, setLoading] = useState(true);
  const pathName = usePathname();
  const modalRef = useRef<HTMLDialogElement>(null);
  const ctx = useContext(AuthContext);
  const dispatch = ctx.dispatch;
  const router = useRouter();

  const handleLoginClicked = () => {
    const modal: HTMLDialogElement | null = modalRef.current;
    modal?.showModal();
  };

  const handleLogoutClicked = () => {
    logoutUser(ctx.token);
    dispatch({ type: "LOGOUT" });
    router.push("/home");
  };

  const closeModal = () => {
    const modal: HTMLDialogElement | null = modalRef.current;
    modal?.close();
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  type navLink = {
    href: string;
    display: string;
    key: number;
  };

  const navLinks: Array<navLink> = [
    { href: "/services", display: "Services", key: 1 },
    { href: "/contact", display: "Contact", key: 2 },
    { href: "/about", display: "About", key: 3 },
  ];

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
                <Link href="/home">
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
                      {navLinks.map((item) => (
                        <Link
                          key={item.key}
                          href={item.href}
                          className={`${
                            pathName === item.href
                              ? "bg-zinc-800 text-white"
                              : ""
                          } transition ease-in-out duration-200 rounded-md text-lg px-3 py-1 font-medium text-black hover:bg-gray-700 hover:text-white`}
                        >
                          {item.display}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  {loading ? (<span className="hidden md:block"
                  >
                    <Puff
                      height="40"
                      width="40"
                      radius={1}
                      color="#420718"
                      ariaLabel="puff-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  </span>) : (
                    <NavButtons
                      isLoggedIn={ctx.isLoggedIn}
                      handleLoginClicked={handleLoginClicked}
                      handleLogoutClicked={handleLogoutClicked}
                    />
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
                {navLinks.map((item) => (
                  <Disclosure.Button
                    key={item.key}
                    as={Link}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-300 hover:text-black"
                  >
                    {item.display}
                  </Disclosure.Button>
                ))}
                <div className="flex flex-col justify-center border-t border-gray-500 pt-3 mx-4">
                  {ctx.isLoggedIn === false ? (
                    <>
                      <Disclosure.Button
                        as={Link}
                        onClick={handleLoginClicked}
                        href="#"
                        className=" w-full mx-auto mb-3 text-center mr-2 rounded-md bg-rose-950 px-2.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                      >
                        Sign In
                      </Disclosure.Button>
                      <Disclosure.Button
                        as={Link}
                        href="/auth/register"
                        className="w-full mx-auto text-center mr-2 rounded-md bg-rose-950 px-2.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                      >
                        Sign Up
                      </Disclosure.Button>
                    </>
                  ) : (
                    <>
                      <Disclosure.Button
                        as={Link}
                        href="/dashboard"
                        className="w-full mb-3 mx-auto text-center rounded-md bg-rose-950 px-2.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                      >
                        Dashboard
                      </Disclosure.Button>
            
                      <Disclosure.Button
                        as={Link}
                        href="#"
                        onClick={handleLogoutClicked}
                        className="w-full mx-auto text-center rounded-md bg-rose-950 px-2.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 tracking-tighter"
                      >
                        Logout
                      </Disclosure.Button>
                    </>
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
