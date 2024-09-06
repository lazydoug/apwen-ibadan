import Image from 'next/image'

import Newsletter from '@/components/common/Newsletter'
import VerticalCard from '@/components/common/Cards/VeritcalCard'

import eventsData from '../../data/events'

const EventsPage = () => {
  return (
    <main className='bg-purple-96'>
      <section className='px-6 py-12 min-[576px]:w-[540px] min-[576px]:px-0 min-[576px]:mx-auto md:w-full md:px-12 lg:px-40 lg:pb-[100px]'>
        <h1 className='text-h2 text-secondary text-center mb-6 lg:text-h1 lg:mb-14'>
          Upcoming Events and Highlights
        </h1>

        <div className='relative w-full h-[32vw] min-h-36 max-h-[460px] rounded-lg overflow-clip mb-12 lg:mb-[60px]'>
          <Image
            className='object-cover'
            src='/assets/event-banner.jpg'
            alt='International Day of Girls in ICT '
            fill
          />
        </div>

        <div className='grid gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-10'>
          {eventsData.map(({ title, date, slug }) => (
            <VerticalCard
              key={title}
              title={title}
              date={date}
              slug={`/events/${slug}`}
            />
          ))}
        </div>
      </section>

      <Newsletter />
    </main>
  )
}

export default EventsPage
