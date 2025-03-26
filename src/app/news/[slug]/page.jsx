import Image from 'next/image'
import Link from 'next/link'

import Newsletter from '@/components/common/Newsletter'
import NewsCard from '@/components/common/Cards/NewsCard'
import { Share } from '@/components/common/Icons'

import { newsData } from '@/data/news'
import { getSinglePost } from '@/helpers/sanityClient'
import { imgUrl } from '@/helpers/generateImageUrl'

import { PortableText } from '@portabletext/react'

const SingleNewsPage = async ({ params: { slug } }) => {
  const post = await getSinglePost(slug, 3)

  // Calculate read time
  const meanWordCharacterCount = 5,
    wordsPerMinute = 200
  const readTime = Math.ceil(
    post.bodyTextLength / meanWordCharacterCount / wordsPerMinute
  )

  const RichTextComponents = {
    types: {
      image: ({ value }) => (
        <div className='relative'>
          <img src={imgUrl(value).url()} alt={value} className='my-8' />
        </div>
      ),
    },

    block: {
      normal: ({ children }) => (
        <p className='text-md-160 text-black lg:text-xl-160'>{children}</p>
      ),
      h2: ({ children }) => <h2 className='mb-5 text-h2'>{children}</h2>,
      h3: ({ children }) => (
        <h3 className='mb-4 text-h4 min-[991px]:text-h3'>{children}</h3>
      ),
      h4: ({ children }) => <h4 className='mb-4 text-h4'>{children}</h4>,
      h5: ({ children }) => <h5 className='mb-2 text-h5'>{children}</h5>,
      h6: ({ children }) => <h6 className='mb-4 text-h6'>{children}</h6>,
      blockquote: ({ children }) => (
        <blockquote className='my-10 border-l-[3px] border-primary px-8 py-4 text-xl min-[767px]:px-10 min-[767px]:text-2xl'>
          {children}
        </blockquote>
      ),
    },

    list: {
      bullet: ({ children }) => (
        <ul className='mb-6 mt-4 list-disc space-y-2 pl-10 text-h6'>
          {children}
        </ul>
      ),
      number: ({ children }) => (
        <ol className='mb-6 mt-4 list-decimal space-y-2 pl-10 text-h6'>
          {children}
        </ol>
      ),
    },

    marks: {
      link: ({ value, children }) => (
        <Link
          className='text-primary decoration-[1.5px] selection:text-secondary/80 hover:underline'
          href={value.href}>
          {children}
        </Link>
      ),
      dropcap: ({ children }) => (
        <span className='float-left mr-3 text-[64px] leading-10'>
          {children}
        </span>
      ),
    },
  }

  return (
    <main className='bg-white'>
      <section>
        <div
          className='h-[32vw] min-h-36 max-h-[460px] bg-center bg-no-repeat bg-cover'
          style={{
            backgroundImage: imgUrl(post.mainImage).url(),
          }}></div>

        <div className='px-6 pb-6 min-[576px]:w-[540px] min-[576px]:px-0 min-[576px]:mx-auto md:w-full md:px-12 lg:px-40'>
          <div className='flex gap-4 justify-between items-center text-sm mt-5'>
            <time className='text-secondary/50'>{post.publishedAt}</time>
            <span className='text-secondary/30 font-bold'>{`${readTime} mins`}</span>
          </div>

          <article className='mt-4'>
            <h1 className='text-h3 text-black mb-8 lg:text-h2'>{post.title}</h1>
            <article>
              {/* <article className='relative px-4 selection:bg-[#FFD1D1] selection:text-grey-300 min-[479px]:px-[10%] min-[991px]:px-[16%]'> */}
              <PortableText value={post.body} components={RichTextComponents} />

              {/* Tags
                <div className='flex gap-4 pt-8'>
                  {tags.map(({ _id, title }) => (
                    <UnderlineHoverText
                      key={_id}
                      href={`/demo/tags/${title.toLowerCase()}`}>
                      {<span className='text-grey-300'>#</span>}
                      {title}
                    </UnderlineHoverText>
                  ))}
                </div> */}
            </article>

            <figure className='w-min mx-auto mt-7 lg:my-12'>
              <div className='flex gap-2 mb-2 md:gap-4 lg:mb-4 lg:gap-8'>
                <div className='relative w-[22vw] h-[22vw] min-w-[85px] max-w-[255px] min-h-[85px] max-h-[255px] rounded-lg overflow-clip'>
                  {/* <Image
                    className='object-cover'
                    src={`/assets/${image1}`}
                    alt={imageDesc}
                    fill
                  /> */}
                </div>
                <div className='relative w-[22vw] h-[22vw] min-w-[85px] max-w-[255px] min-h-[85px] max-h-[255px] rounded-lg overflow-clip'>
                  {/* <Image
                    className='object-cover'
                    src={`/assets/${image2}`}
                    alt={imageDesc}
                    fill
                  /> */}
                </div>
                <div className='relative w-[22vw] h-[22vw] min-w-[85px] max-w-[255px] min-h-[85px] max-h-[255px] rounded-lg overflow-clip'>
                  {/* <Image
                    className='object-cover'
                    src={`/assets/${image3}`}
                    alt={imageDesc}
                    fill
                  /> */}
                </div>
              </div>

              <figcaption className='text-xs text-black/50 italic md:text-sm lg:text-md-150'>
                {/* {imageDesc} */}
              </figcaption>
            </figure>
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
          <p className='text-md-150 text-black mt-3'>
            {post.tags.map(({ _id, title }, index) => (
              <span key={_id}>
                {title}
                {index < post.tags.length - 1 && ', '}
              </span>
            ))}
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
