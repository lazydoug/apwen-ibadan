import Image from 'next/image'

const AboutPage = () => {
  return (
    <main className='bg-purple-98'>
      <section className='px-6 pt-12'>
        <p className='text-xl-140 text-secondary/50 font-bold mb-6'>
          ABOUT OUR ORGANISATION
        </p>
        <div className='flex flex-col lg:flex-row gap-8 lg:items-center'>
          <div>
            <h1 className='text-h2 text-secondary mb-5'>
              The Association Of Professional Women Engineers of Nigeria (APWEN)
              <span className='block text-h1 text-secondary/10 mt-2'>
                IBADAN
              </span>
            </h1>

            <p className='text-md-150 text-black'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br /> <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>

          <div className='relative w-[327px] h-[327px]'>
            <Image
              className='rounded-lg'
              src='/assets/placeholder.png'
              alt=''
              fill
            />
          </div>
        </div>

        <div className='relative w-32 h-[97px] mt-3'>
          <Image src='/assets/arrow.png' alt='' fill />
        </div>
      </section>

      <section className='px-6 pt-3 pb-12'>
        <p className='text-xl-140 text-secondary/50 font-bold mb-2'>
          WHAT WE STAND FOR
        </p>
        <h2 className='text-h2 text-secondary'>Our Mission</h2>

        <span className='relative'>
          <p className='text-md-160 text-black mt-6 mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br /> <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <Image
            className='absolute right-0 top-1/2 -translate-y-1/2 opacity-50'
            src='/assets/corporate-bag.png'
            alt=''
            width={187}
            height={165}
          />
        </span>

        <div className='relative w-[327px] h-24 rounded-lg overflow-clip'>
          <Image src='/assets/placeholder.png' alt='' fill />
        </div>
      </section>

      <section className='px-6 py-12'>
        <p className='text-xl-140 text-secondary/50 font-bold mb-2'>
          AT THE VERY CORE
        </p>
        <h2 className='text-h2 text-secondary'>Our Values</h2>

        <p className='text-md-160 text-black mt-6 mb-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className='relative w-[150px] h-[97px]'>
          <Image src='/assets/darts.png' alt='Darts' fill />
        </div>

        <div className='flex flex-col gap-8'>
          <div className='flex gap-6'>
            <div className='relative w-[45px] h-[74px] shrink-0'>
              <Image src='/assets/rocket.png' alt='' fill />
            </div>
            <div>
              <p className='text-md-150 text-secondary font-bold mb-3'>
                Fast & Strong
              </p>
              <p className='text-md-160 text-black/50'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='relative w-[45px] h-[42px] shrink-0'>
              <Image src='/assets/bulb.png' alt='' fill />
            </div>
            <div>
              <p className='text-md-150 text-secondary font-bold mb-3'>
                Creative
              </p>
              <p className='text-md-160 text-black/50'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='relative w-[45px] h-[49px] shrink-0'>
              <Image src='/assets/brain.png' alt='' fill />
            </div>
            <div>
              <p className='text-md-150 text-secondary font-bold mb-3'>
                Critical Thinking
              </p>
              <p className='text-md-160 text-black/50'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='px-6 py-12'>
        <div className='mb-8'>
          <p className='text-xl-140 text-secondary/50 font-bold mb-2'>
            BEHIND THE SCENES
          </p>
          <h2 className='text-h2 text-secondary'>Our Core Team</h2>
          <p className='text-md-160 text-black mt-6 mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {
          <div className='flex flex-col gap-6'>
            <div>
              <div className='relative w-full h-[390px] rounded-lg overflow-clip mb-4'>
                <Image src='/assets/placeholder.png' alt='' fill />
              </div>
              <div>
                <p className='text-xl-140 text-secondary font-bold mb-1'>
                  Lorem Ipsum
                </p>
                <p className='text-sm text-secondary/50 mb-3'>Consectetur</p>
                <p className='text-md-160 text-black'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div>
              <div className='relative w-full h-[390px] rounded-lg overflow-clip mb-4'>
                <Image src='/assets/placeholder.png' alt='' fill />
              </div>
              <div>
                <p className='text-xl-140 text-secondary font-bold mb-1'>
                  Lorem Ipsum
                </p>
                <p className='text-sm text-secondary/50 mb-3'>Consectetur</p>
                <p className='text-md-160 text-black'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        }
      </section>
    </main>
  )
}

export default AboutPage
