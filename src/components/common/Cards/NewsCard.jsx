import Image from 'next/image'
import Link from 'next/link'

const NewsCard = ({ date, image, title, slug }) => {
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

      <div>
        <Link
          href={`/news/${slug}`}
          className='text-black text-md-150 font-bold line-clamp-2 mb-4 text-wrap hover:text-primary'>
          <p className='text-black text-xl-140 font-bold line-clamp-2 mb-3'>
            {title ||
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
          </p>
        </Link>

        <p className='text-sm text-black/50'>
          {date || `${ordinalDate} ${monthYear}`}
        </p>
      </div>
    </div>
  )
}

export default NewsCard
