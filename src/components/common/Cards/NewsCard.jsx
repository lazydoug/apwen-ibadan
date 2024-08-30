const NewsCard = ({ date, image, text, readTime }) => {
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
      <div className='relative'>
        <div
          className='w-[112px] h-[112px] rounded-lg'
          style={{ backgroundImage: `url('${image}')` }}></div>
      </div>

      <div>
        <p className='text-black text-xl-140 font-bold line-clamp-2 mb-3'>
          {text ||
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
        </p>

        <p className='text-sm text-black/50'>
          {date || `${ordinalDate} ${monthYear}`}
        </p>
      </div>
    </div>
  )
}

export default NewsCard
