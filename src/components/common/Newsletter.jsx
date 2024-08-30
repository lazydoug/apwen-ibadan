import { Send } from './Icons'

const Newsletter = () => {
  return (
    <section className='px-6 py-44 bg-newsletter'>
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
          className='p-4 rounded-lg text-secondary placeholder:text-sm placeholder:text-secondary placeholder:font-medium focus:outline-none focus:border focus:border-secondary'
          type='email'
          placeholder='Enter your email'
        />
        <button className='p-4 bg-secondary text-md-150 font-bold rounded-lg'>
          Subscribe
        </button>
      </form>
    </section>
  )
}

export default Newsletter
