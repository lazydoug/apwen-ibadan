import Image from 'next/image'
import Link from 'next/link'

import HorizontalCard from '@/components/common/Cards/HorizontalCard'
import VerticalCard from '@/components/common/Cards/VeritcalCard'
import { Calendar } from '@/components/common/Icons'
import Newsletter from '@/components/common/Newsletter'

export default function Home() {
  const recents = ['', '', '']
  const whatsNew = ['', '', '', '', '', '']

  return (
    <main className='bg-purple-98 overflow-x-clip'>
      <section className='px-6 pt-12 pb-8 flex flex-col gap-8'>
        <div>
          <h1 className='text-h2 text-secondary text-center mb-5'>
            The Association Of Professional Women Engineers of Nigeria (APWEN)
          </h1>
          <p className='text-xl-160 text-black font-medium text-center'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className='flex gap-6'>
          {recents.map(() => (
            <div key={''} className='w-full flex flex-col gap-8 flex-none'>
              <div className='relative w-full h-[331px] rounded-lg overflow-clip'>
                <Image src='/assets/placeholder.png' alt='' fill />
              </div>
              <HorizontalCard />
            </div>
          ))}
        </div>
      </section>
      <section className='px-6 py-12 md: lg:px-40 lg:py-[100px]'>
        <div className='mb-8 lg:mb-[50px]'>
          <h2 className='text-h2 text-secondary'>
            What’s <span className='text-secondary/20'>New?</span>
          </h2>
          <p className='text-md-160 text-secondary'>
            Don’t miss the new trends
          </p>
        </div>

        <div className='flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-center lg:gap-12'>
          {whatsNew.map(() => (
            <VerticalCard key={''} />
          ))}
        </div>

        <Link
          className='block py-4 w-full lg:w-[327px] lg:mx-auto bg-primary text-md-150 text-white text-center font-bold rounded-lg mt-8 lg:mt-16'
          href='/news'>
          View more
        </Link>
      </section>
      <section className='px-6 py-12 lg:px-40 lg:py-[100px]'>
        <h2 className='text-h2 text-secondary mb-8'>
          <span className='text-secondary/20'>Upcoming </span>
          <span className='block -mt-[23px]'>Events</span>
        </h2>

        <div className='w-full px-5 pt-8 pb-12 lg:p-[100px] bg-purple-90 rounded-lg'>
          <div className='flex gap-3 items-center mb-3'>
            <Calendar color='rgb(104 4 55 / 0.5)' />
            <span className='text-lg font-bold text-secondary/50'>
              Spetember 1, 2024
            </span>
          </div>

          <Link href='/event-name'>
            <h3 className='text-h3 text-secondary hover:text-primary mb-5'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </h3>
          </Link>

          <p className='text-md-160 text-black/60 font-medium mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
          </p>

          <div className='relative w-full h-[360px]'>
            <Image
              className='rounded-lg'
              src='/assets/placeholder.png'
              alt='Event banner image'
              fill
            />

            <div className='w-full px-2 text-grey-500/10 flex justify-between absolute -bottom-9 z-10'>
              <div className='flex flex-col items-center'>
                <span className='text-h2'>05</span>
                <span className='text-xl-160 font-bold'>Days</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='text-h2'>20</span>
                <span className='text-xl-160 font-bold'>Hours</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='text-h2'>10</span>
                <span className='text-xl-160 font-bold'>Mins</span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='text-h2'>00</span>
                <span className='text-xl-160 font-bold'>Secs</span>
              </div>
            </div>
          </div>
        </div>

        <Link
          className='block lg:hidden py-4 w-full bg-primary text-md-150 text-white text-center font-bold rounded-lg mt-8'
          href='/events'>
          View more
        </Link>
      </section>

      <section className='px-6 py-12 bg-about bg-fixed'>
        <h2 className='text-h2 text-purple-96 mb-4'>
          About <span className='text-purple-92/50'>Us</span>
        </h2>
        <p className='text-md-160 text-purple-98/50 mb-7'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link
          className='block py-4 bg-primary text-md-150 text-white text-center font-bold rounded-lg'
          href='/about'>
          Read more
        </Link>
      </section>

      <Newsletter />
    </main>
  )
}
