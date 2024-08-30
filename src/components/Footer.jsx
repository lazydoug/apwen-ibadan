import Link from 'next/link'
import { Facebook, Instagram, LinkedIn, X_Twitter } from './common/Icons'

const Footer = () => {
  return (
    <footer className='px-6 py-12 bg-white'>
      <div className='mb-7'>
        <p className='text-lg text-secondary font-bold mb-2'>APWEN Ibadan</p>
        <p className='text-md-160 text-black'>
          24, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </p>
      </div>

      <div>
        <p className='text-md-150 text-secondary font-bold mb-4'>Quick Links</p>
        <ul className='flex flex-col gap-3 text-md-160 text-black'>
          <li>
            <Link href='/about'>About Us</Link>
          </li>
          <li>
            <Link href='/projects'>Projects</Link>
          </li>
          <li>
            <Link href='/news'>News</Link>
          </li>
          <li>
            <Link href='/events'>Events</Link>
          </li>
          <li>
            <Link href='/contact'>Contact Us</Link>
          </li>
        </ul>
      </div>

      <hr className='border-1.5 border-purple-94 -mx-6 mt-12 mb-8' />

      <div className='flex flex-col gap-6 items-center'>
        <p className='text-md-160 text-black/50 font-medium'>
          © 2024 APWEN Ibadan.
        </p>
        <span className='flex gap-10 justify-center opacity-50'>
          <Facebook />
          <Instagram />
          <X_Twitter />
          <LinkedIn />
        </span>
      </div>
    </footer>
  )
}

export default Footer
