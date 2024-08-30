import Image from 'next/image'

import Newsletter from '@/components/common/Newsletter'
import VerticalCard from '@/components/common/Cards/VeritcalCard'

const EventsPage = () => {
  return (
    <main>
      <section className='px-6 py-12 bg-purple-96'>
        <h1 className='text-h2 text-black text-center mb-6'>
          Lorem ipsum dolor sit amet, consectetur
        </h1>

        <div className='relative w-full h-[142px] rounded-lg overflow-clip mb-12'>
          <Image src='/assets/placeholder.png' alt='' fill />
        </div>

        <div className='flex flex-col gap-6'>
          {
            <>
              <VerticalCard />
              <VerticalCard />
              <VerticalCard />
            </>
          }
        </div>
      </section>

      <Newsletter />
    </main>
  )
}

export default EventsPage
