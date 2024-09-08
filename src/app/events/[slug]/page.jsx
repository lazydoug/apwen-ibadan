import Image from 'next/image'

import Newsletter from '@/components/common/Newsletter'

import { eventsData } from '@/data/events'

const SingleEventPage = ({ params: { slug } }) => {
  const {
    title,
    date,
    details,
    bannerImage,
    image1,
    image2,
    image3,
    imageDesc,
    tags,
  } = eventsData.find(event => event.slug === slug)

  return (
    <main>
      <section className='bg-white'>
        <div
          className='flow-root bg-center bg-cover bg-no-repeat'
          style={{
            backgroundImage: `url("/assets/${bannerImage}")`,
          }}>
          <div className='mx-6 mt-[75px] mb-[133px] min-[576px]:w-[540px] min-[576px]:px-0 min-[576px]:mx-auto md:w-full md:px-12 lg:px-40'>
            <p className='text-lg text-purple-88 font-bold mb-8 lg:text-xl-140'>
              {date}
            </p>
            <p className='text-h2 text-white lg:text-h1'>{title}</p>
          </div>

          {/* Countdown */}
          <div className='mx-6 px-7 py-[30px] bg-purple-96 text-grey-500/10 translate-y-1/2 rounded-lg drop-shadow-[0_4px_10px_rgba(36,10,23,0.25)] min-[576px]:w-[540px] min-[576px]:mx-auto md:w-auto md:mx-12 lg:mx-40'>
            <div className='max-w-[600px] mx-auto flex justify-between'>
              <div className='flex flex-col items-center'>
                <span className='text-h2 text-secondary/40 lg:text-h1'>00</span>
                <span className='text-xl-160 text-secondary/40 font-bold'>
                  Days
                </span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='text-h2 text-secondary/40 lg:text-h1'>00</span>
                <span className='text-xl-160 text-secondary/40 font-bold'>
                  Hours
                </span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='text-h2 text-secondary/40 lg:text-h1'>00</span>
                <span className='text-xl-160 text-secondary/40 font-bold'>
                  Mins
                </span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='text-h2 text-secondary/40 lg:text-h1'>00</span>
                <span className='text-xl-160 text-secondary/40 font-bold'>
                  Secs
                </span>
              </div>
            </div>
          </div>
        </div>

        <article className='px-6 pt-32 pb-16 min-[576px]:w-[540px] min-[576px]:px-0 min-[576px]:mx-auto md:w-full md:px-12 lg:px-40 lg:pt-40 lg:pb-[100px]'>
          <h1 className='text-h3 text-black mb-8'>{title}</h1>
          <p
            className='text-md-160 text-black lg:text-xl-160'
            dangerouslySetInnerHTML={{ __html: details }}></p>

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
      </section>

      <Newsletter />
    </main>
  )
}

export default SingleEventPage
