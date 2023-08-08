import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardNav({children}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('');
  const location = useLocation(); 

  useEffect(() => {
    const currentPath = location.pathname.split('/').pop(); // Adjust to get the last part of the path
    setCurrentPage(currentPath);
  }, [location.pathname]);

  const navigation = [
    { name: 'Dashboard', href: '../dashboard/', icon: HomeIcon, current: currentPage.toLowerCase() === '' },
    { name: 'Apps', href: '../dashboard/websites', icon: UsersIcon, current: currentPage.toLowerCase() === 'websites' },
    { name: 'Integrations', href: '../dashboard/integrations', icon: FolderIcon, current: currentPage.toLowerCase() === 'integrations' }
  ];
  const teams = [
    // { id: 1, name: 'Details', href: '../dashboard/account', initial: 'H', current: false },
    { id: 1, name: 'Settings', href: '../dashboard/settings', initial: 'S', current: currentPage.toLowerCase() === 'settings' },
    { id: 1, name: 'Plans', href: '../dashboard/plans', initial: 'P', current: currentPage.toLowerCase() === 'plans' }
  ]

  return (
      <div className="flex flex-col h-screen gap-y-6 overflow-y-auto bg-gray-800 px-6 min-w-[170px] w-[170px]">

        <div className="flex h-1 shrink-0 items-center">
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item, indx) => (
                  <li key={indx}>
                    <Link 
                      to={item.href}
                      onClick={() => setCurrentPage(item.name)}
                      className={classNames(
                        item.current
                          ? 'bg-gray-800 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )} 
                      aria-current={item.current ? 'page' : undefined}
                      >
                      <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="text-xs font-semibold leading-6 text-gray-400">Your Account</div>
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
