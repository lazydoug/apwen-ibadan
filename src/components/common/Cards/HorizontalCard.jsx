import { shortDateFormatter } from '@/helpers/dateFormatter'
import Image from 'next/image'
import Link from 'next/link'

const HorizontalCard = ({ date, image, title, href }) => {
  image || (image = '/assets/placeholder.png')

  {
    /* calculating the avg read time per minute */
  }
  const words = 0
  const readTime = Math.floor(words.length / 238)

  return (
    <div className='w-full flex gap-3 items-center md:w-1/2 lg:w-1/3 flex-shrink-0 snap-start'>
      <div className='relative'>
        <Link href={href}>
          <div className='relative w-[120px] h-[120px] rounded-lg overflow-clip z-10'>
            <Image
              className='object-cover hover:scale-125 transition-all ease-in-out duration-500'
              src={image}
              alt={title}
              fill
            />
          </div>
        </Link>
        <div className='w-[120px] h-[120px] absolute bg-purple-94 left-1 top-1 rounded-lg'></div>
      </div>

      <div>
        <Link
          href={href}
          className='text-black text-md-150 font-bold line-clamp-2 mb-4 text-wrap hover:text-primary'>
          {title ||
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
        </Link>
        <div className='flex flex-row gap-[10px] items-center'>
          <p className='text-xs text-grey-400 font-medium'>
            {shortDateFormatter.format(new Date(date))}
          </p>

          <span className='w-1 h-1 bg-grey-500 rounded-full'></span>

          <p className='text-xs text-grey-400 font-medium'>
            {(readTime > 1 ? `${readTime} min` : '<1 min') || '- min'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HorizontalCard
