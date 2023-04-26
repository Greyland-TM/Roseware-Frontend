import './index.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Button from './components/button/Button';


export default function Example() {
  return (
    <>
      <div className="min-h-full">
      <Navbar />

        <header className="bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="text-lg font-semibold leading-6 text-gray-900">Dashboard</h1>
          </div>
        </header>

        <p className='text'>hellow</p>
        <main>
          <Button size="x-large" onClick={() => console.log('clicked!')}>Click Me </Button>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"><Outlet /></div>
        </main>
      </div>
    </>
  )
}

