import Link from 'next/link'
import { Facebook, Instagram, LinkedIn, X_Twitter } from './common/Icons'

const Footer = () => {
  return (
    <footer className='py-12 lg:pb-8 lg:pt-[100px] bg-white'>
      <div className='px-6 min-[576px]:w-[540px] min-[576px]:px-0 min-[576px]:mx-auto min-[576px]:flex min-[576px]:justify-between min-[576px]:items-start md:w-full md:px-12 lg:px-40'>
        <div className='max-w-64 mb-7 md:max-w-[288px] min-[576px]:mb-0'>
          <p className='text-lg text-secondary font-bold mb-2'>APWEN Ibadan</p>
          <p className='text-md-160 text-black'>
            Ibadan, <br />
            Oyo State, <br />
            Nigeria.
          </p>
        </div>

        <div>
          <p className='text-md-150 text-secondary font-bold mb-4'>
            Quick Links
          </p>
          <ul className='gap-3 text-md-160 text-black min-[576px]:grid min-[576px]:grid-cols-2 min-[576px]:auto-cols-min min-[576px]:gap-x-10 lg:gap-x-20'>
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
      </div>

      <hr className='border-1.5 border-purple-94 mt-12 mb-8' />

      <div className='flex flex-col gap-6 items-center md:flex-row md:justify-between md:items-center md:px-12 lg:px-40'>
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
