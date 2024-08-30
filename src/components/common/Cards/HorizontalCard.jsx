const HorizontalCard = ({ date, image, text, readTime }) => {
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
    <div className='flex gap-3 items-center'>
      <div className='relative'>
        <div
          className='w-[120px] h-[120px] rounded-lg relative z-10'
          style={{ backgroundImage: `url('${image}')` }}></div>
        <div className='w-[120px] h-[120px] absolute bg-purple-94 left-1 top-1 rounded-lg'></div>
      </div>
      <div>
        <p className='text-black text-md-150 font-bold line-clamp-2 mb-4'>
          {text ||
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
        </p>
        <div className='flex flex-row gap-[10px] items-center'>
          <p className='text-xs text-grey-400 font-medium'>
            {date || `${ordinalDate} ${monthYear}`}
          </p>
          <span className='w-1 h-1 bg-grey-500 rounded-full'></span>
          <p className='text-xs text-grey-400 font-medium'>
            {readTime || '3 min'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HorizontalCard
