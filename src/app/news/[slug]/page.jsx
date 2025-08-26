import Newsletter from '@/components/common/Newsletter'
import NewsCard from '@/components/common/Cards/NewsCard'
import { Share } from '@/components/common/Icons'

import { newsData } from '@/data/news'
import { getSinglePost } from '@/helpers/sanityClient'
import { shortDateFormatter } from '@/helpers/dateFormatter'
import { imgUrl } from '@/helpers/generateImageUrl'

import PostBody from '@/components/PostBody'
import getReadTime from '@/helpers/getReadTime'

const SingleNewsPage = async ({ params: { slug } }) => {
  const post = await getSinglePost(slug, 3)

  // Format date
  const formattedDate = shortDateFormatter.format(new Date(post.publishedAt))

  // Return Not Found page if post is not found
  if (!post) return notFound()

  // Calculate read time
  const readTime = getReadTime(
    post.bodyTextLength + (post.body2TextLength || 0)
  )

  return (
    <>
      <section className='bg-white'>
        <div
          className='h-[32vw] min-h-36 max-h-[460px] bg-no-repeat bg-cover'
          style={{
            backgroundImage: `url(${imgUrl(post.mainImage).url()})`,
          }}></div>

        <div className='px-6 pb-6 min-[576px]:w-[540px] min-[576px]:px-0 min-[576px]:mx-auto md:w-full md:px-12 lg:px-40'>
          <div className='flex gap-4 justify-between items-center text-sm mt-5'>
            <time className='text-secondary/50'>{formattedDate}</time>
            <span className='text-secondary/30 font-bold'>
              {readTime} {readTime === 1 ? 'min' : 'mins'}
            </span>
          </div>

          <PostBody article={post} />
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
          {/* {post.relatedPosts.map(({ title, body, date, bannerImage, slug }) => (
            <NewsCard
              key={title}
              title={title}
              body={body}
              date={date}
              image={bannerImage}
              slug={slug}
            />
          ))} */}
        </div>
      </section>

      <Newsletter />
    </>
  )
}

export default SingleNewsPage
