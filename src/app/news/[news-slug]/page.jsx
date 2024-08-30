import Image from 'next/image'

import Newsletter from '@/components/common/Newsletter'
import NewsCard from '@/components/common/Cards/NewsCard'
import { Share } from '@/components/common/Icons'

const SingleNewsPage = () => {
  return (
    <main>
      <section className='px-6 pb-12 bg-white'>
        <div
          className='-mx-6 h-[300px] bg-center bg-no-repeat bg-cover'
          style={{
            backgroundImage:
              'linear-gradient(rgba(36, 10, 23, 0.5), rgba(0, 0, 0, 0.9)), url("/assets/apwen-activity.jpeg")',
          }}></div>

        <div className='flex gap-4 justify-between items-center text-sm mt-5'>
          <span className='text-secondary/50'>1st September, 2024</span>
          <span className='text-secondary/30 font-bold'>3 min read</span>
        </div>

        <article className='mt-4'>
          <h1 className='text-h3 text-black mb-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </h1>
          <p className='text-md-160 text-black'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
            <br />
            <br />
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?
          </p>

          <figure className='my-7'>
            <div className='flex justify-between gap-2 mb-2'>
              <div className='relative w-[104px] h-[104px] rounded-lg overflow-clip'>
                <Image src='/assets/placeholder.png' alt='' fill />
              </div>
              <div className='relative w-[104px] h-[104px] rounded-lg overflow-clip'>
                <Image src='/assets/placeholder.png' alt='' fill />
              </div>
              <div className='relative w-[104px] h-[104px] rounded-lg overflow-clip'>
                <Image src='/assets/placeholder.png' alt='' fill />
              </div>
            </div>

            <figcaption className='text-xs text-black/50'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium
            </figcaption>
          </figure>

          <p className='text-md-160 text-black'>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?
          </p>
        </article>
      </section>

      <section className='px-6 pb-8 bg-white'>
        <div className='flex gap-3 items-center'>
          <hr className='flex-grow' /> <Share />
        </div>

        <div>
          <div>
            <span className='text-md-150 text-black font-bold'>Tags</span>
            <hr className='w-[50px] border-[3px] border-black mt-[10px]' />
          </div>
          <p className='text-md-150 text-black mt-3'>
            Lorem Ipsum, Lorem, Ipsum, Dummy
          </p>
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
          {
            <>
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </>
          }
        </div>
      </section>

      <Newsletter />
    </main>
  )
}

export default SingleNewsPage
