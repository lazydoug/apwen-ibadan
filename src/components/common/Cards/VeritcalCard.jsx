import Image from 'next/image'
import Link from 'next/link'

const VerticalCard = ({ date, image, title, href }) => {
  const currentDate = new Date(Date.now())

  const month = currentDate.toLocaleDateString('en-GB', {
    month: 'long',
  })

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
    <div className='w-full bg-white rounded-lg overflow-clip basis-0 grow'>
      <Link href={href}>
        <div className='relative w-full h-80 overflow-clip'>
          <Image
            className='object-cover hover:scale-125 transition-all ease-in-out duration-500'
            src={`/assets/${image}`}
            alt={title}
            fill
          />
        </div>
      </Link>

      <div className='w-full p-5'>
        <div className='flex flex-row gap-[10px] items-center mb-[10px]'>
          <span className='w-1 h-1 bg-grey-500 rounded-full'></span>
          <p className='text-md-150 text-grey-400 font-medium'>
            {date || `${ordinalDate} ${month}`}
          </p>
        </div>

        <Link
          href={href}
          className='text-black text-md-150 font-bold line-clamp-2 mb-4 text-wrap hover:text-primary'>
          {/* <p className='h-24 text-black text-xl-160 font-bold line-clamp-3'> */}
          {title ||
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
          {/* </p> */}
        </Link>
      </div>
    </div>
  )
}

export default VerticalCard
