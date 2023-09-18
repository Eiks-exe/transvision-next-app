import Link from 'next/link';
import React from 'react'

type Props = {
  title: string;
}

const AppNavbar: React.FC<Props> = ({ title }) => {
  return (
    <nav className='flex justify-between items-center w-[100%]  mx-auto py-3 px-6 border-2 border border-b-slate-200'>
      <div className='text-xl font-extrabold italic'>
        <span>T</span>
        <span className='text-red-500 '>ransvision N</span>
        <span>etwork / PFNTE</span>
      </div>
      <div
        className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li>
            <a className="hover:text-gray-500" href="#">Acceuil</a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">Qui somme nous ?</a>
          </li>
          <li>
          <Link href="/pages/ChannelsHub">Chaines</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
      </div>
    </nav>
  )
}

export default AppNavbar