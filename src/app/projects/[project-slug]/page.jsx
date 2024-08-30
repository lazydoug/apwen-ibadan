import Image from 'next/image'

import Newsletter from '@/components/common/Newsletter'

const SingleProjectsPage = () => {
  return (
    <main>
      <section className='px-6 pt-5 pb-12 bg-white'>
        <span className='text-secondary/50'>1st September, 2024</span>

        <article className='mt-2'>
          <h1 className='text-h3 text-black'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </h1>

          <div className='relative w-full h-[200px] rounded-lg overflow-clip mt-8 mb-5'>
            <Image src='/assets/placeholder.png' alt='' fill />
          </div>

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

export default SingleProjectsPage
