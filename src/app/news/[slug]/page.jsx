import Image from 'next/image'

import Newsletter from '@/components/common/Newsletter'
import NewsCard from '@/components/common/Cards/NewsCard'
import { Share } from '@/components/common/Icons'

import { newsData } from '@/data/news'

const SingleNewsPage = ({ params: { slug } }) => {
  const {
    title,
    date,
    content,
    bannerImage,
    image1,
    image2,
    image3,
    imageDesc,
    tags,
  } = newsData.find(news => news.slug === slug)

  const words = content.split(' ')
  const readTime = Math.floor(words.length / 238)

  return (
    <main className='bg-white'>
      <section>
        <div
          className='h-[32vw] min-h-36 max-h-[460px] bg-center bg-no-repeat bg-cover'
          style={{
            backgroundImage: `url("/assets/${bannerImage}")`,
          }}></div>

        <div className='px-6 pb-6 min-[576px]:w-[540px] min-[576px]:px-0 min-[576px]:mx-auto md:w-full md:px-12 lg:px-40'>
          <div className='flex gap-4 justify-between items-center text-sm mt-5'>
            <time className='text-secondary/50'>{date}</time>
            <span className='text-secondary/30 font-bold'>
              {(readTime > 1 ? `${readTime} min read` : '<1 min read') ||
                '- min read'}
            </span>
          </div>

          <article className='mt-4'>
            <h1 className='text-h3 text-black mb-8 lg:text-h2'>{title}</h1>
            <p
              className='text-md-160 text-black'
              dangerouslySetInnerHTML={{ __html: content }}></p>

            <figure className='w-min mx-auto mt-7 lg:my-12'>
              <div className='flex gap-2 mb-2 md:gap-4 lg:mb-4 lg:gap-8'>
                <div className='relative w-[22vw] h-[22vw] min-w-[85px] max-w-[255px] min-h-[85px] max-h-[255px] rounded-lg overflow-clip'>
                  <Image
                    className='object-cover'
                    src={`/assets/${image1}`}
                    alt={imageDesc}
                    fill
                  />
                </div>
                <div className='relative w-[22vw] h-[22vw] min-w-[85px] max-w-[255px] min-h-[85px] max-h-[255px] rounded-lg overflow-clip'>
                  <Image
                    className='object-cover'
                    src={`/assets/${image2}`}
                    alt={imageDesc}
                    fill
                  />
                </div>
                <div className='relative w-[22vw] h-[22vw] min-w-[85px] max-w-[255px] min-h-[85px] max-h-[255px] rounded-lg overflow-clip'>
                  <Image
                    className='object-cover'
                    src={`/assets/${image3}`}
                    alt={imageDesc}
                    fill
                  />
                </div>
              </div>

              <figcaption className='text-xs text-black/50 italic md:text-sm lg:text-md-150'>
                {imageDesc}
              </figcaption>
            </figure>

            {/* <p className='text-md-160 text-black'>
             {content2}
            </p> */}
          </article>
        </div>
      </section>

      <section className='px-6 pb-12 bg-white min-[576px]:w-[540px] min-[576px]:px-0 min-[576px]:mx-auto md:w-full md:px-12 lg:px-40 md:pb-20'>
        <div className='flex gap-3 items-center'>
          <hr className='border border-grey-300 flex-grow' /> <Share />
        </div>

        <div>
          <div>
            <span className='text-md-150 text-black font-bold'>Tags</span>
            <hr className='w-[50px] border-[3px] border-black mt-[10px]' />
          </div>
          <p className='text-md-150 text-black mt-3'>{tags}</p>
        </div>

        <div className='mt-12'>
          <div>
            <span className='text-md-150 text-black font-bold'>Other News</span>
            <div className='flex items-center mt-[10px]'>
              <hr className='w-[50px] border-[3px] border-black' />
              <hr className='flex-grow border border-grey-300' />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-6 mt-6'>
          {newsData.slice(-5).map(({ title, date, bannerImage, slug }) => (
            <NewsCard
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

export default SingleNewsPage
