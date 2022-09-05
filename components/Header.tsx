import React from 'react'
import Image from "next/image";
import { BellIcon, ChatIcon, BookOpenIcon, CodeIcon, CogIcon, CurrencyDollarIcon } from '@heroicons/react/outline';
import { ChevronDownIcon, HomeIcon, SearchIcon, MenuIcon, LoginIcon, LogoutIcon } from '@heroicons/react/solid';
import { signIn, signOut, useSession } from 'next-auth/react';


function Header() {
  const { data: session } = useSession();
  
  return (
    <div className="flex bg-white px-5 py-2 shadow-sm w-full sticky top-0 z-50">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image src="https://superdistros.com/playground_assets/logox1-200h.png" 
        objectFit="contain"
        layout="fill" 
        alt="Super Distros" />
      </div>

      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search */}
      <form className="flex flex-1 items-center space-x-2 border border-gray-200 rounded-md bg-gray-100 px-3 py-1">
        <SearchIcon className="h-5 w-5 text-gray-400"/>
        <input className="flex-1 bg-transparent outline-none" type="text" placeholder="Search" />
        <button className="" type="submit" hidden />
      </form>

      {/* Icon Menu */}
      <div className="mx-5 hidden space-x-2 items-center text-gray-500 lg:inline-flex">
        <BellIcon className="icon"/> 
        <ChatIcon className="icon"/>
        <BookOpenIcon className="icon"/>
        <hr className="h-10 border"/>
        <CodeIcon className="icon"/>
        <CogIcon className="icon"/>
        <CurrencyDollarIcon className="icon"/>
      </div>

      {/* Show mobile menu  */}
      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>
      
      {/* Session Sign In/Out */}
      {session ? (
        <div 
          onClick={() => signOut()} 
          className="hidden cursro-pointer items-center space-x-2  p-2 lg:flex">
          <div onClick={() => signIn()} className="hidden cursor-pointer items-center space-x-2 border-gray-100 p-2 lg:flex">
            <div className="relative h-5 w-5 fle flex-shrink-0">
              <LogoutIcon className="" />
            </div>
            <div className="flex-1 text-xs">
              <p className='truncate text-red-500 font-medium'>{session?.user?.name}</p>
              <p className="flex text-gray-500 items-center">Lvl 1 Super</p>
            </div>

            <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-500"/>
          </div>
        </div>
      ) : (
        <div 
          onClick={() => signIn()} 
          className="hidden cursor-pointer items-center space-x-2 p-2 lg:flex">
          <div className="relative h-5 w-5 fle flex-shrink-0">
            <LoginIcon className="" />
          </div>

          <p className="text-green-500 font-medium">Sign In</p>
        </div>
      )}
    </div>
  )
}

export default Header