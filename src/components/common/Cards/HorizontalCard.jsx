import Image from 'next/image'
import Link from 'next/link'

import { imgUrl } from '@/helpers/generateImageUrl'
import { shortDateFormatter } from '@/helpers/dateFormatter'
import getReadTime from '@/helpers/getReadTime'

const HorizontalCard = ({ post }) => {
  //Calculate the avg read time per minute
  const readTime = getReadTime(
    post.bodyTextLength + (post.body2TextLength || 0)
  )

  return (
    <div className='w-full flex gap-3 items-center md:w-1/2 lg:w-1/3 flex-shrink-0 snap-start'>
      <div className='relative'>
        <Link href={`/news/${post.slug.current}`}>
          <div className='relative w-[120px] h-[120px] rounded-lg overflow-clip z-10'>
            <Image
              className='object-cover hover:scale-125 transition-all ease-in-out duration-500'
              src={imgUrl(post.mainImage).url()}
              alt={post.title}
              fill
            />
          </div>
        </Link>
        <div className='w-[120px] h-[120px] absolute bg-purple-94 left-1 top-1 rounded-lg'></div>
      </div>

      <div>
        <Link
          href={`/news/${post.slug.current}`}
          className='text-black text-md-150 font-bold line-clamp-2 mb-4 text-wrap hover:text-primary'>
          {post.title}
        </Link>
        <div className='flex flex-row gap-[10px] items-center'>
          <p className='text-xs text-grey-400 font-medium'>
            {shortDateFormatter.format(new Date(post.publishedAt))}
          </p>

          <span className='w-1 h-1 bg-grey-500 rounded-full'></span>

          <p className='text-xs text-grey-400 font-medium'>
            {readTime} {readTime === 1 ? 'min' : 'mins'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HorizontalCard
