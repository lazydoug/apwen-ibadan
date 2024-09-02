import Image from 'next/image'
import Link from 'next/link'

import HorizontalCard from '@/components/common/Cards/HorizontalCard'
import VerticalCard from '@/components/common/Cards/VeritcalCard'
import { Calendar } from '@/components/common/Icons'
import Newsletter from '@/components/common/Newsletter'

import eventsData from './data/events'
import heroData from './data/hero'

export default function Home() {
  const recents = ['', '', '']

  return (
    <main className='bg-purple-98'>
      {/* <section className='px-6 pt-12 pb-8 md:px-12 lg:px-40 lg:py-[100px] flex flex-col gap-8'>
        <div className='flex flex-col gap-8 lg:flex-row '>
          <div className='flex-grow'>
            <h1 className='text-h2 text-secondary text-center mb-5 lg:text-left lg:text-h1 lg:flex-1'>
              The Association Of Professional Women Engineers of Nigeria (APWEN)
            </h1>
            <p className='text-xl-160 text-black font-medium text-center lg:text-left'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className='relative w-full h-[331px] rounded-lg overflow-clip lg:h-[594px] lg:flex-1'>
            <Image src='/assets/placeholder.png' alt='' fill />
          </div>
        </div>

        <div className='flex gap-6'>
          {recents.map(() => (
            // <div key={''} className='w-full flex flex-col gap-8 flex-none'>
            <HorizontalCard key={''} />
            // </div>
          ))}
        </div>
      </section> */}

      <section className='px-6 pt-12 pb-8 md:px-12 lg:px-40 lg:py-[100px] flex flex-col gap-8 lg:gap-12'>
        <div className='flex flex-col gap-8 lg:flex-row lg:items-center'>
          <div className='lg:flex-1'>
            <h1 className='text-h2 text-secondary text-center mb-5 lg:mb-8 lg:text-left min-[1210px]:text-h1'>
              The Association Of Professional Women Engineers of Nigeria (APWEN)
            </h1>
            <p className='text-xl-160 text-black font-medium text-center lg:text-left'>
              A division of the Nigerian Society of Engineers.
            </p>
          </div>

          {/* Hero Image */}
          {/* <div className='relative w-full h-[331px] rounded-lg overflow-clip lg:h-[594px] lg:flex-1'> */}
          <div className='relative w-full h-[327px] rounded-lg overflow-clip lg:w-[40vw] lg:h-[40vw] lg:-mr-28'>
            <Image
              className='object-cover'
              src='/assets/event-banner.jpeg'
              alt=''
              fill
            />
          </div>
        </div>

        <div className='h-32 flex gap-6 justify-between overflow-x-auto snap-x snap-mandatory'>
          {heroData.map(({ title, date }) => (
            <HorizontalCard key={title} title={title} date={date} />
          ))}
        </div>
      </section>

      <section className='px-6 py-12 min-[576px]:w-[540px] min-[576px]:px-0 min-[576px]:mx-auto md:w-full md:px-12 lg:px-40 lg:py-[100px]'>
        <div className='mb-8 lg:mb-[50px]'>
          <h2 className='text-h2 text-secondary'>
            What’s <span className='text-secondary/20'>New?</span>
          </h2>
          <p className='text-md-160 text-secondary'>
            Don’t miss the new trends
          </p>
        </div>

        <div>
          <div className='grid gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-10'>
            {eventsData.map(({ title, date }) => (
              <VerticalCard key={title} title={title} date={date} />
            ))}
          </div>

          <Link
            className='block py-4 w-full bg-primary text-md-150 text-white text-center font-bold rounded-lg mt-8 min-[576px]:w-[327px] min-[576px]:mx-auto min-[576px]:mt-12'
            href='/news'>
            View more
          </Link>
        </div>
      </section>

      <section className='px-6 py-12 min-[576px]:w-[540px] min-[576px]:px-0 min-[576px]:mx-auto md:w-full md:px-12 lg:px-40 lg:py-[100px]'>
        <h2 className='text-h2 text-secondary mb-8 min-[1440px]:text-h1 min-[1440px]:mb-12'>
          <span className='text-secondary/20'>Upcoming</span>
          <span className='block -mt-[23px] min-[1440px]:-mt-4'>Events</span>
        </h2>

        <div>
          <div className='relative px-5 pt-8 pb-12 bg-purple-90 rounded-lg lg:p-[100px] min-[1440px]:pr-12'>
            <div className='flex flex-col gap-8 min-[1440px]:flex-row'>
              <div>
                <div className='flex gap-3 items-center mb-3 min-[1440px]:mb-8'>
                  <Calendar color='rgb(104 4 55 / 0.5)' />
                  <span className='text-lg font-bold text-secondary/50'>
                    {eventsData[4].date}
                  </span>
                </div>

                <Link className='block mb-5 min-[1440px]:mb-12' href={'#'}>
                  <h3 className='text-h3 text-secondary hover:text-primary min-[1440px]:text-h2'>
                    {eventsData[4].title}
                  </h3>
                </Link>

                <p className='text-xl-160 text-black/60 font-medium'>
                  {eventsData[4].details}
                </p>
              </div>

              {/**Thumbnail */}
              <div className='relative min-[1440px]:-top-[195px]'>
                <div className='relative w-full h-[360px] min-[1440px]:w-[470px] min-[1440px]:h-[512px]'>
                  <Image
                    className='rounded-lg z-10 object-cover'
                    src='/assets/event-banner.jpeg'
                    alt='Event banner image'
                    fill
                  />
                  <div className='w-[470px] h-[512px] absolute bg-purple-92 left-1 top-1 rounded-lg max-[1440px]:hidden'></div>

                  {/**Countdown */}
                  <div className='w-full max-w-80 px-2 text-grey-500/10 flex justify-between absolute -bottom-9 left-1/2 -translate-x-1/2 z-10 max-[320px]:hidden'>
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
            </div>

            {/** View more button visible on large screens */}
            <Link
              className='absolute right-12 bottom-[100px] text-md-150 text-secondary font-bold max-[1440px]:hidden'
              href='/events'>
              View more
              <hr className='w-[30px] border-[3px] border-white mt-1' />
            </Link>
          </div>

          {/** View more button only visible on small screens */}
          <Link
            className='block min-[1440px]:hidden py-4 w-full bg-primary text-md-150 text-white text-center font-bold rounded-lg mt-8 min-[576px]:w-[327px] min-[576px]:mx-auto'
            href='/events'>
            View more
          </Link>
        </div>
      </section>

      <section
        className='bg-cover bg-center bg-no-repeat md:bg-fixed'
        style={{
          backgroundImage:
            'linear-gradient(rgba(36, 10, 23, 0.5), rgba(0, 0, 0, 0.85)), url("/assets/apwen-activity.jpeg")',
        }}>
        <div className='px-6 py-12 min-[576px]:w-[540px] min-[576px]:px-0 min-[576px]:mx-auto md:w-full md:px-12 lg:px-40 lg:py-[100px]'>
          <h2 className='text-h2 text-purple-96 mb-4'>
            About <span className='text-purple-92/50'>Us</span>
          </h2>
          <p className='text-md-160 text-purple-98 mx-5'>
            The Association of Professional Women Engineers of Nigeria (APWEN)
            was formed by a handful of women engineers led by Engr. (Mrs.) J. O.
            Maduka in 1982 and was formally inaugurated in 1983. It was
            originally meant to be a pressure group since most men hiring
            engineers then would rather have women in the kitchen and not on
            construction sites or behind the desk carrying out engineering
            designs.
          </p>
          <Link
            className='block py-4 bg-primary text-md-150 text-white text-center font-bold rounded-lg mt-8 min-[576px]:w-[327px] min-[576px]:mx-auto'
            href='/about'>
            Read more
          </Link>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
