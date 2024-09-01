import TeamMember from '@/components/common/Cards/TeamMember'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <main className='bg-purple-98'>
      <section className='px-6 pt-12 pb-3 min-[576px]:w-[540px] min-[576px]:px-0 min-[576px]:px-0 min-[576px]:mx-auto md:w-full md:px-12 lg:px-40 lg:pt-[100px]'>
        <div className='flex flex-col lg:flex-row gap-8 lg:items-center'>
          <div className='lg:flex-1'>
            <p className='text-xl-140 text-secondary/50 font-bold mb-6 lg:text-h4'>
              ABOUT OUR ORGANISATION
            </p>
            <h1 className='text-h2 text-secondary mb-5 min-[1440px]:text-h1 lg:mb-8'>
              The Association of Professional Women Engineers of Nigeria (APWEN)
              <span className='block text-h1 text-secondary/10 mt-2'>
                IBADAN
              </span>
            </h1>

            <p className='text-md-160 text-black lg:text-xl-160 font-medium'>
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

          {/**Hero Image */}
          <div className='relative w-full h-[327px] rounded-lg overflow-clip lg:w-[40vw] lg:h-[40vw] lg:-mr-28'>
            <Image
              src='/assets/placeholder.png'
              alt=''
              fill
            />
          </div>
        </div>

        <div className='relative w-32 h-[97px] mt-3 ml-auto mr-14 lg:mx-auto lg:mt-8'>
          <Image src='/assets/arrow.png' alt='' fill />
        </div>
      </section>

      <section className='px-6 pb-12 min-[576px]:w-[540px] min-[576px]:px-0 min-[576px]:mx-auto md:w-full md:px-12 lg:px-40 lg:pb-[100px]'>
        <p className='text-xl-140 text-secondary/50 font-bold mb-2 lg:text-h4 lg:mb-4'>
          WHAT WE STAND FOR
        </p>
        <h2 className='text-h2 text-secondary mb-6 lg:mb-20 lg:text-h1'>
          Our Mission
        </h2>

        <div className='relative mb-8 lg:mb-16'>
          <p className='text-md-160 text-black flex flex-col gap-8 lg:text-xl-160 lg:font-medium lg:flex-row lg:gap-14'>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>

            <span>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </span>
          </p>

          <Image
            className='absolute right-0 top-1/2 -translate-y-1/2 opacity-50'
            src='/assets/corporate-bag.png'
            alt=''
            width={187}
            height={165}
          />
        </div>

        <div className='relative w-full h-[18vw] min-h-24 max-h-[260px] rounded-lg overflow-clip'>
          <Image src='/assets/placeholder.png' alt='' fill />
        </div>
      </section>

      <section className='px-6 py-12 min-[576px]:w-[540px] min-[576px]:px-0 min-[576px]:px-0 min-[576px]:mx-auto md:w-full md:px-12 lg:px-40 lg:py-[100px]'>
        <div className='mb-6 flex flex-col gap-6 min-[1120px]:flex-row min-[1120px]:items-center min-[1120px]:mb-20'>
          <div className='min-[1120px]:w-[52vw]'>
            <p className='text-xl-140 text-secondary/50 font-bold mb-2 lg:text-h4 lg:mb-4'>
              AT THE VERY CORE
            </p>
            <h2 className='text-h2 text-secondary mb-6 lg:mb-8 lg:text-h1'>
              Our Values
            </h2>

            <p className='text-md-160 text-secondary lg:text-xl-160 lg:font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className='relative w-[150px] h-[97px] ml-auto'>
            <Image src='/assets/darts.png' alt='Darts' fill />
          </div>
        </div>

        <div className='flex flex-col gap-8 min-[1120px]:flex-row'>
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

      <section className='px-6 py-12 min-[576px]:w-[540px] min-[576px]:px-0 min-[576px]:px-0 min-[576px]:mx-auto md:w-full md:px-12 lg:px-40 lg:py-[100px]'>
        <div className='mb-8 min-[1120px]:w-[52vw] lg:mb-20'>
          <p className='text-xl-140 text-secondary/50 font-bold mb-2 lg:text-h4 lg:mb-4'>
            BEHIND THE SCENES
          </p>
          <h2 className='text-h2 text-secondary mb-6 lg:mb-8 lg:text-h1'>
            Our Core Team
          </h2>
          <p className='text-md-160 text-black lg:text-xl-160 lg:font-medium'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {
          <div className='grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10'>
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
            <TeamMember />
          </div>
        }
      </section>
    </main>
  )
}

export default AboutPage
