import TeamMember from '@/components/common/Cards/TeamMember'
import Image from 'next/image'

const AboutPage = () => {
  const teamMembers = [
    {
      title: 'Engr.',
      name: 'Abisola Adabanija',
      position: 'Chairman',
      about: '',
      image: '',
    },
    {
      title: 'Engr.',
      name: 'Yemisi Abidoye',
      position: 'Vice Chairman',
      about: '',
      image: '',
    },
    {
      title: 'Engr. Dr.',
      name: 'Mojisola Bolarinwa',
      position: 'General Secretary',
      about: '',
      image: '',
    },
    {
      title: 'Engr.',
      name: 'Adefunke Adeyemo',
      position: 'Assistant General Secretary',
      about: '',
      image: '',
    },
    {
      title: 'Engr.',
      name: 'Fausat Agboluaje',
      position: 'Publicity Secretary',
      about: '',
      image: '',
    },
    {
      title: 'Engr. Dr.',
      name: 'Kafayat Ajibola',
      position: 'Technical Secretary',
      about: '',
      image: '',
    },
    {
      title: 'Engr.',
      name: 'Iyabode Jimoh',
      position: 'Welfare Secretary',
      about: '',
      image: '',
    },
    {
      title: 'Engr.',
      name: 'Abidat Fasasi-Aleshiloye',
      position: 'Internal Auditor',
      about: '',
      image: '',
    },
    {
      title: 'Engr.',
      name: 'Zainab Adedoyin',
      position: 'Financial Secretary',
      about: '',
      image: '',
    },
    {
      title: 'Engr.',
      name: 'Temitope Ayodele',
      position: 'Treasurer',
      about: '',
      image: '',
    },
  ]
  return (
    <main className='bg-purple-98'>
      <section className='px-6 pt-12 pb-3 min-[576px]:w-[540px] min-[576px]:px-0 min-[576px]:mx-auto md:w-full md:px-12 lg:px-40 lg:pt-[100px]'>
        <div className='flex flex-col lg:flex-row gap-8 lg:items-center'>
          <div className='lg:flex-1'>
            <p className='text-xl-140 text-secondary/50 font-bold mb-6 lg:text-h4'>
              ABOUT OUR ORGANISATION
            </p>
            <h1 className='text-h2 text-secondary mb-5 min-[1440px]:text-h1 lg:mb-8'>
              The Association of Professional Women Engineers of Nigeria (APWEN)
              <span className='block text-h2 text-secondary/10 mt-2 min-[1440px]:text-h1'>
                IBADAN CHAPTER
              </span>
            </h1>

            <p className='text-md-160 text-black lg:text-xl-160 font-medium'>
              The Association of Professional Women Engineers of Nigeria (APWEN)
              - Ibadan Chapter aims to promote the inclusion of women in
              engineering and STEM fields, encouraging diversity and fostering a
              more inclusive community.
              <br /> <br /> The chapter is led by <i>Chairman </i>
              <strong>Engr. Abisola Adabanija</strong>, with a dedicated
              executive committee including <i>Vice Chairman</i>{' '}
              <strong>Engr. Yemisi Abidoye</strong>,<i>General Secretary</i>{' '}
              <strong>Engr. Dr. Mojisola Bolarinwa</strong>, and other key
              members.
            </p>
          </div>

          {/**Hero Image */}
          <div className='relative w-full h-[327px] rounded-lg overflow-clip lg:w-[40vw] lg:h-[40vw] lg:-mr-28'>
            <Image
              className='object-cover'
              src='/assets/about-banner.jpg'
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
            <span className='flex-1'>
              <strong>Mission:</strong> To continuously increase awareness that
              engineering is a career for girls also, thereby improving the
              numerical strength of female engineers, and to provide a forum for
              promoting sorority amongst female engineers.
            </span>

            <span className='flex-1'>
              <strong>Vision:</strong> To be the catalyst for the advancement of
              women in the engineering profession towards national and global
              technological development.
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
          <Image
            className='object-cover object-center'
            src='/assets/about-banner-2.jpg'
            alt=''
            fill
          />
        </div>
      </section>

      <section className='px-6 py-12 min-[576px]:w-[540px] min-[576px]:px-0 min-[576px]:mx-auto md:w-full md:px-12 lg:px-40 lg:py-[100px]'>
        <div className='mb-6 flex flex-col gap-6 min-[1120px]:flex-row min-[1120px]:items-center min-[1120px]:mb-20'>
          <div className='min-[1120px]:w-[52vw]'>
            <p className='text-xl-140 text-secondary/50 font-bold mb-2 lg:text-h4 lg:mb-4'>
              AT THE VERY CORE
            </p>
            <h2 className='text-h2 text-secondary mb-6 lg:mb-8 lg:text-h1'>
              Our Values
            </h2>

            <p className='text-md-160 text-secondary lg:text-xl-160 lg:font-medium'>
              At APWEN Ibadan, we are dedicated to empowering female engineers
              by providing opportunities for professional growth and leadership.
              We advance innovation by fostering a culture that encourages
              creative solutions and groundbreaking ideas in engineering. Our
              commitment to championing diversity ensures that women in STEM are
              not only included but are pivotal in shaping the future of
              technology and engineering, creating a more inclusive and dynamic
              community.
            </p>
          </div>

          <div className='relative w-[150px] h-[97px] ml-auto'>
            <Image src='/assets/darts.png' alt='Darts' fill />
          </div>
        </div>

        <div className='flex flex-col gap-8 min-[1120px]:flex-row'>
          <div className='flex gap-6 flex-1'>
            <div className='relative w-[45px] h-[74px] shrink-0'>
              <Image src='/assets/rocket.png' alt='' fill />
            </div>
            <div>
              <p className='text-md-150 text-secondary font-bold mb-3'>
                Resilience
              </p>
              <p className='text-md-160 text-black/50'>
                Empowering women and girls with the strength and resilience to
                face challenges head-on, laying a solid foundation in
                engineering.
              </p>
            </div>
          </div>
          <div className='flex gap-6 flex-1'>
            <div className='relative w-[45px] h-[42px] shrink-0'>
              <Image src='/assets/bulb.png' alt='' fill />
            </div>
            <div>
              <p className='text-md-150 text-secondary font-bold mb-3'>
                Innovation
              </p>
              <p className='text-md-160 text-black/50'>
                We support women in engineering in exploring new ideas and
                creating transformative solutions.
              </p>
            </div>
          </div>
          <div className='flex gap-6 flex-1'>
            <div className='relative w-[45px] h-[49px] shrink-0'>
              <Image src='/assets/brain.png' alt='' fill />
            </div>
            <div>
              <p className='text-md-150 text-secondary font-bold mb-3'>
                Critical Thinking
              </p>
              <p className='text-md-160 text-black/50'>
                Nurturing young girls and female engineers, encouraging a
                thoughtful, analytical approach to problem-solving and
                delivering impactful solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='px-6 py-12 min-[576px]:w-[540px] min-[576px]:px-0 min-[576px]:mx-auto md:w-full md:px-12 lg:px-40 lg:py-[100px]'>
        <div className='mb-8 min-[1120px]:w-[52vw] lg:mb-20'>
          <p className='text-xl-140 text-secondary/50 font-bold mb-2 lg:text-h4 lg:mb-4'>
            BEHIND THE SCENES
          </p>
          <h2 className='text-h2 text-secondary mb-6 lg:mb-8 lg:text-h1'>
            Our Core Team
          </h2>
          <p className='text-md-160 text-black lg:text-xl-160 lg:font-medium'>
            Meet the dedicated individuals driving our mission forward. Each
            core team member brings a unique blend of expertise, passion, and
            commitment, working together to create a supportive and dynamic
            environment. Their collective experience and dedication to
            empowering women and girls in engineering form the backbone of our
            organisation, ensuring impactful and innovative solutions.
          </p>
        </div>

        {
          <div className='grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10'>
            {teamMembers.map(({ title, name, position, about }) => (
              <TeamMember
                key={name}
                name={name}
                position={position}
                about={about}
              />
            ))}
          </div>
        }
      </section>
    </main>
  )
}

export default AboutPage
