'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { Search } from './Icons'

const NavBar = () => {
  const [menuVisibility, setMenuVisibility] = useState('hidden')
  const mobileMenu = useRef()

  const handleMenuClick = () => {
    menuVisibility == 'hidden'
      ? setMenuVisibility('block')
      : setMenuVisibility('hidden')
  }

  return (
    <div className=''>
      <nav className='px-6 py-5 md:px-12 md:py-7 bg-white/40 backdrop-blur-[80px] flex items-center justify-between'>
        {/* Logo */}
        <div className='text-lg font-bold text-primary'>
          <Link href='/'>
            <Image
              src='/assets/logo.png'
              alt='APWEN Ibadan logo'
              width={117}
              height={28.25}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex md:items-center md:space-x-8'>
          <Link href='/' className='text-md text-secondary hover:text-primary'>
            Home
          </Link>
          <Link
            href='/events'
            className='text-md text-secondary hover:text-primary'>
            Events
          </Link>
          {/* <Link
            href='/projects'
            className='text-md text-secondary
            hover:text-primary'>
            Projects
          </Link> */}
          <Link
            href='/about'
            className='text-md text-secondary hover:text-primary'>
            About Us
          </Link>
          <Link
            href='/contact'
            className='text-md text-secondary hover:text-primary'>
            Contact Us
          </Link>
        </div>

        {/* Search Icon for Desktop */}
        <div className='hidden md:block text-secondary hover:text-primary'>
          {/* <Search /> */}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className='md:hidden'>
          <button
            onClick={handleMenuClick}
            className='text-secondary hover:text-primary'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='2'
              stroke='currentColor'
              className='w-6 h-6'>
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Initially hidden) */}
      <div
        ref={mobileMenu}
        className={`${menuVisibility} md:hidden bg-pink-50 py-4`}>
        <Link
          onClick={() => setMenuVisibility('hidden')}
          href='/'
          className='block px-6 py-2 text-md text-secondary hover:text-primary'>
          Home
        </Link>
        <Link
          onClick={() => setMenuVisibility('hidden')}
          href='/events'
          className='block px-6 py-2 text-md text-secondary hover:text-primary'>
          Events
        </Link>
        {/* <Link
          onClick={() => setMenuVisibility('hidden')}
          href='/projects'
          className='block px-6 py-2 text-md text-secondary hover:text-primary'>
          Projects
        </Link> */}
        <Link
          onClick={() => setMenuVisibility('hidden')}
          href='/about'
          className='block px-6 py-2 text-md text-secondary hover:text-primary'>
          About Us
        </Link>
        <Link
          onClick={() => setMenuVisibility('hidden')}
          href='/contact'
          className='block px-6 py-2 text-md text-secondary hover:text-primary'>
          Contact Us
        </Link>
      </div>
    </div>
  )
}

export default NavBar
