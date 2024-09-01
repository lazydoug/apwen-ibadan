import { Send } from './Icons'

const Newsletter = () => {
  return (
    <section className='bg-newsletter'>
      <div className='px-6 py-[100px] min-[576px]:w-[540px] min-[576px]:px-0 min-[576px]:mx-auto md:w-full md:px-12 lg:px-40'>
        <div className='mb-[50px]'>
          <span className='flex gap-[10px]'>
            <Send />
            <p className='text-h4 text-secondary/50'>Subscribe</p>
          </span>
          <p className='text-h3 text-secondary'>to Our Newsletter</p>
          <p className='text-md-150 text-secondary/50 font-medium mt-2'>
            The latest news, events and stories delivered right to your inbox.
          </p>
        </div>
  
        <form action='' className='flex gap-[10px]'>
          <input
            className='w-1/2 min-w-max p-4 rounded-lg text-secondary placeholder:text-sm placeholder:text-secondary placeholder:font-medium focus:outline-none focus:border focus:border-secondary'
            type='email'
            placeholder='Enter your email'
          />
          <button className='p-4 bg-secondary text-md-150 font-bold rounded-lg'>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
