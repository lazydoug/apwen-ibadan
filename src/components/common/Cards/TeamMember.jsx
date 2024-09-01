import Image from 'next/image'

const TeamMember = () => {
  return (
    <div>
      <div className='relative w-full h-[390px] rounded-lg overflow-clip mb-4 lg:h-[238px]'>
        <Image src='/assets/placeholder.png' alt='' fill />
      </div>
      <div>
        <p className='text-xl-140 text-secondary font-bold mb-1'>Lorem Ipsum</p>
        <p className='text-sm text-secondary/50 mb-3'>Consectetur</p>
        <p className='text-md-160 text-black'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  )
}

export default TeamMember
