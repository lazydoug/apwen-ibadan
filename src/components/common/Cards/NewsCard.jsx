import Image from 'next/image'
import Link from 'next/link'

const NewsCard = ({ date, image, title,body, slug }) => {
  image || (image = '/assets/placeholder.png')

  return (
    <div className='flex gap-3'>
      <div className='relative w-[112px] h-[112px] rounded-lg overflow-clip shrink-0 z-10'>
        <Link href={`/news/${slug}`}>
          <Image
            className='object-cover hover:scale-125 transition-all ease-in-out duration-500'
            src={`/assets/${image}`}
            alt={title}
            fill
          />
        </Link>
      </div>

      <Link
        href={`/news/${slug}`}
        className='text-black text-md-150 font-bold line-clamp-2 mb-4 text-wrap hover:text-primary'>
        <p className='text-black text-xl-140 font-bold line-clamp-2 mb-3'>
          {title}
        </p>

        <p>{body}</p>

        <p className='text-sm text-black/50'>{date}</p>
      </Link>
    </div>
  )
}

export default NewsCard
