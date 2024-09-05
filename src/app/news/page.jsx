import Image from 'next/image'

import Newsletter from '@/components/common/Newsletter'
import VerticalCard from '@/components/common/Cards/VeritcalCard'

import { newsData } from '@/data/news'

const NewsPage = () => {
  return (
    <main className='bg-purple-96'>
      <section className='px-6 py-12 min-[576px]:w-[540px] min-[576px]:px-0 min-[576px]:mx-auto md:w-full md:px-12 lg:px-40 lg:py-[100px]'>
        <h1 className='text-h2 text-secondary text-center mb-6 lg:text-h1 lg:mb-14'>
          Latest News & Updates
        </h1>

        <div className='relative w-full h-[32vw] min-h-36 max-h-[460px] rounded-lg overflow-clip mb-12 lg:mb-[60px]'>
          <Image src='/assets/placeholder.png' alt='' fill />
        </div>

        <div className='grid gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-10'>
          {newsData.map(({title, date, bannerImage, slug}) => (
            <VerticalCard
              key={title}
              title={title}
              date={date}
              image={bannerImage}
              slug={slug}
            />
          ))}
        </div>
      </section>

      <Newsletter />
    </main>
  )
}

export default NewsPage
