import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '../dashboard/', icon: HomeIcon, current: true },
  { name: 'Websites', href: '../dashboard/websites', icon: UsersIcon, current: false },
  { name: 'Integrations', href: '../dashboard/integrations', icon: FolderIcon, current: false }
]
const teams = [
  { id: 1, name: 'Account', href: '../dashboard/account', initial: 'H', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardNav({children}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
      <div className="flex flex-col h-full gap-y-20 overflow-y-auto bg-gray-800 px-6">

        <div className="flex h-1 shrink-0 items-center">
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )} >
                        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                      {item.name}
                      </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {teams.map((team) => (
                  <li key={team.name}>
                    <Link 
                      to={team.href}
                      className={classNames(
                        team.current
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
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
  )
}
