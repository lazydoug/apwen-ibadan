import Image from 'next/image'
import Link from 'next/link'

const HorizontalCard = ({ date, image, title, content, slug }) => {
  const currentDate = new Date(Date.now())

  const monthYear = new Date(Date.now())
    .toLocaleDateString('en-GB', {
      month: 'short',
      year: 'numeric',
    })
    .split(' ')
    .join(', ')

  const ordinalDate = (function (d) {
    if (d > 3 && d < 21) return `${d}th`

    switch (d % 10) {
      case 1:
        return `${d}st`
      case 2:
        return `${d}nd`
      case 3:
        return `${d}rd`
      default:
        return `${d}th`
    }
  })(currentDate.getDate())

  image || (image = '/assets/placeholder.png')

  {
    /* calculating the avg read time per minute */
  }
  const words = content.split(' ')
  const readTime = Math.floor(words.length / 238)

  return (
    <div className='w-full flex gap-3 items-center md:w-1/2 lg:w-1/3 flex-shrink-0 snap-start'>
      <div className='relative'>
        <Link href={`/news/${slug}`}>
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
          href={`/news/${slug}`}
          className='text-black text-md-150 font-bold line-clamp-2 mb-4 text-wrap hover:text-primary'>
          {title ||
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
        </Link>
        <div className='flex flex-row gap-[10px] items-center'>
          <p className='text-xs text-grey-400 font-medium'>
            {date || `${ordinalDate} ${monthYear}`}
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
