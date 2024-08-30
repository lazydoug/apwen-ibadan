import Image from 'next/image'

import Newsletter from '@/components/common/Newsletter'

const SingleEventPage = () => {
  return (
    <main>
      <section className='pb-12 bg-white'>
        <div
          className='flow-root bg-center bg-cover bg-no-repeat'
          style={{
            backgroundImage:
              'linear-gradient(rgba(36, 10, 23, 0.5), rgba(0, 0, 0, 0.9)), url("/assets/apwen-activity.jpeg")',
          }}>
          <div className='mx-6 mt-[75px] mb-[60px]'>
            <p className='text-lg text-purple-88 font-bold mb-8'>
              1st September, 2024
            </p>
            <p className='text-h2 text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <div className='mx-6 px-7 py-[30px] bg-purple-96 text-grey-500/10 flex justify-between translate-y-1/2 rounded-lg drop-shadow-[0_4px_10px_rgba(36,10,23,0.25)]'>
            <div className='flex flex-col items-center'>
              <span className='text-h2 text-secondary/40'>05</span>
              <span className='text-xl-160 text-secondary/40 font-bold'>
                Days
              </span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-h2 text-secondary/40'>20</span>
              <span className='text-xl-160 text-secondary/40 font-bold'>
                Hours
              </span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-h2 text-secondary/40'>10</span>
              <span className='text-xl-160 text-secondary/40 font-bold'>
                Mins
              </span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-h2 text-secondary/40'>00</span>
              <span className='text-xl-160 text-secondary/40 font-bold'>
                Secs
              </span>
            </div>
          </div>
        </div>

        <article className='px-6 pt-[108px]'>
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

      <Newsletter />
    </main>
  )
}

export default SingleEventPage
