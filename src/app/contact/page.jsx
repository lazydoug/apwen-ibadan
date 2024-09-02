import Link from 'next/link'

const ContactPage = () => {
  return (
    <main>
      <section className='px-6 py-12 bg-purple-94 md:px-12 lg:px-40 lg:py-[100px]'>
        <div className='flex flex-col gap-12 min-[1120px]:flex-row min-[1120px]:items-center'>
          <div className='lg:flex-1'>
            <h1 className='text-h2 text-black mb-3 lg:text-h1 lg:mb-6'>
              Contact Us
            </h1>
            <div className='flex flex-col gap-4 mb-12 lg:gap-[18px]'>
              <p className='text-md-160 text-black lg:text-xl-160'>
                Email, call or complete the form to lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>

              <Link
                className='text-md-160 text-primary font-medium lg:text-xl-160'
                href='mailto:info@apwenibadan.com'>
                info@apwenibadan.com
              </Link>
              <Link
                className='text-md-160 text-primary font-medium lg:text-xl-160'
                href='tel:+234-(0)-812-3456-789'>
                +234-(0)-812-3456-789
              </Link>
            </div>

            <div className='flex flex-col gap-8 lg:flex-row min-[1120px]:flex-col min-[1355px]:flex-row'>
              <div>
                <p className='text-lg text-black font-bold mb-4 lg:text-xl-140'>
                  Feedback and Suggestions
                </p>
                <p className='text-md-160 text-black lg:text-xl-160'>
                  We value your feedback and are continuously working to improve
                  APWEN (Ibadan). Your input is crucial in shaping our future.
                </p>
              </div>

              <div>
                <p className='text-lg text-black font-bold mb-4 lg:text-xl-140'>
                  Media Inquiries
                </p>
                <p className='text-md-160 text-black lg:text-xl-160'>
                  For media-related questions or press inquiries, please contact
                  us at{' '}
                  <Link
                    className='text-primary'
                    href='mailto:media@apwenibadan.com'>
                    media@apwenibadan.com
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <form className='p-5 bg-white rounded-2xl' action=''>
            <div className='flex flex-col gap-5 mb-6'>
              <div>
                <p className='text-h3 text-black mb-1'>Get in Touch</p>
                <p className='text-sm text-grey-500'>
                  You can reach us anytime
                </p>
              </div>
              <div className='flex flex-col gap-5'>
                <input type='text' name='firstName' placeholder='First name' />
                <input type='text' name='lastName' placeholder='Last name' />
              </div>
              <input type='email' name='email' placeholder='Email' />
              <input type='tel' name='phone' placeholder='Phone number' />
              <textarea
                className='w-full'
                name='message'
                rows={10}
                placeholder='How can we help?'></textarea>
            </div>

            <button
              className='w-full py-4 text-md-150 text-white text-center font-bold bg-primary rounded-lg mb-4'
              type='submit'>
              Submit
            </button>

            <p className='text-xs text-center text-grey-500'>
              By contacting us, you agree to our{' '}
              <span className='text-xs text-secondary font-bold'>
                Terms of Service
              </span>{' '}
              and{' '}
              <span className='text-xs text-secondary font-bold'>
                Privacy Policy
              </span>
            </p>
          </form>
        </div>
      </section>

      <section className='px-6 py-12 bg-white md:px-12 lg:px-40 lg:py-[100px]'>
        <div className='lg:w-max lg:ml-auto'>
          <div className='mb-6 lg:mb-8'>
            <p className='text-md-150 text-secondary/50 font-bold mb-2 lg:text-h4 lg:mb-4'>
              OUR LOCATION
            </p>
            <h2 className='text-h4 text-secondary lg:text-h2'>
              Connecting Near and Far
            </h2>
          </div>

          <div className='mb-12'>
            <p className='text-lg text-black font-bold mb-1 lg:text-xl-140 lg:mb-2'>
              Main Office
            </p>
            <p className='text-md-160 text-black lg:text-xl-160'>
              Ifedayo Akintunde House, <br />
              NSE Secretariat, <br />
              General Gas Iyana Church Road, <br />
              Akobo, Ibadan.
            </p>
          </div>
        </div>

        {/*MAP */}
        <div></div>
      </section>

      {/*FAQ */}
      <section className='px-6 py-12 bg-purple-96'></section>
    </main>
  )
}

export default ContactPage
