import Link from "next/link";
import { useState } from "react";
import { FolderIcon, HomeIcon, UsersIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const location = usePathname();

  const navigation = [
    {
      name: "Dashboard",
      href: "../dashboard/",
      icon: HomeIcon,
      current: currentPage.toLowerCase() === "",
    },
    {
      name: "Apps",
      // href: "../dashboard/apps",
      href: "#",
      icon: UsersIcon,
      current: currentPage.toLowerCase() === "apps",
    },
    {
      name: "Integrations",
      // href: "../dashboard/integrations",
      href: "#",
      icon: FolderIcon,
      current: currentPage.toLowerCase() === "integrations",
    },
  ];
  const teams = [
    // { id: 1, name: 'Details', href: '../dashboard/account', initial: 'H', current: false },
    {
      id: 1,
      name: "Settings",
      // href: "../dashboard/settings",
      href: "#",
      initial: "S",
      current: currentPage.toLowerCase() === "settings",
    },
    {
      id: 1,
      name: "Plans",
      // href: "../dashboard/plans",
      href: "#",
      initial: "P",
      current: currentPage.toLowerCase() === "plans",
    },
  ];

  return (
    <div className="flex flex-col h-screen gap-y-6 overflow-y-auto border-r border-gray-200 px-12 tracking-normal">
      <div className="flex h-1 shrink-0 items-center"></div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item, indx) => (
                <li key={indx}>
                  <Link
                    href={item.href}
                    onClick={() => setCurrentPage(item.name)}
                    className={classNames(
                      item.current
                        ? "bg-gray-800 text-white"
                        : "text-black hover:text-white hover:bg-gray-800",
                      "transition-all ease-in-out duration-200 group flex gap-x-3 rounded-md p-2 text-sm leading-6 "
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    <item.icon
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <div className="text-sm font-semibold leading-6 text-black">
              Your Account
            </div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
              {teams.map((team) => (
                <li key={team.name}>
                  <Link
                    href={team.href}
                    className={classNames(
                      team.current
                        ? "bg-gray-800 text-white"
                        : "text-black hover:text-white hover:bg-gray-800",
                      "transition-all ease-in-out duration-200 group flex gap-x-3 rounded-md p-2 text-sm leading-6 "
                    )}
                  >
                    <span className="flex font-semibold h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gray-800 text-[0.8rem] text-white group-hover:text-black group-hover:bg-white">
                      {team.initial}
                    </span>
                    <span className="truncate">{team.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
