import Image from 'next/image'

const TeamMember = ({ title, name, position, about, image }) => {
  return (
    <div>
      <div className='relative w-full h-[390px] rounded-lg overflow-clip mb-4 lg:h-[238px]'>
        <Image
          src={image || '/assets/placeholder.png'}
          alt={`${title} ${name}` || ''}
          fill
        />
      </div>
      <div>
        <p className='text-xl-140 text-secondary font-bold mb-1'>
          {name || 'Lorem Ipsum'}
        </p>
        <p className='text-sm text-secondary/50 mb-3'>
          {position || 'Consectetur'}
        </p>
        <p className='text-md-160 text-black'>
          {about ||
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        </p>
      </div>
    </div>
  )
}

export default TeamMember
