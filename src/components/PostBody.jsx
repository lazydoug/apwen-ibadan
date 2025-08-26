import Link from 'next/link'
import Image from 'next/image'

import { PortableText } from 'next-sanity'

import { imgUrl } from '@/helpers/generateImageUrl'

const RichTextComponents = {
  types: {
    image: ({ value }) => (
      <div className='relative'>
        <img src={imgUrl(value).url()} alt={value} className='my-8' />
      </div>
    ),
  },

  block: {
    normal: ({ children }) => (
      <p className='text-md-160 text-black lg:text-xl-160'>{children}</p>
    ),
    h2: ({ children }) => <h2 className='mb-5 text-h2'>{children}</h2>,
    h3: ({ children }) => (
      <h3 className='mb-4 text-h4 min-[991px]:text-h3'>{children}</h3>
    ),
    h4: ({ children }) => <h4 className='mb-4 text-h4'>{children}</h4>,
    h5: ({ children }) => <h5 className='mb-2 text-h5'>{children}</h5>,
    h6: ({ children }) => <h6 className='mb-4 text-h6'>{children}</h6>,
    blockquote: ({ children }) => (
      <blockquote className='my-10 border-l-[3px] border-primary px-8 py-4 text-xl min-[767px]:px-10 min-[767px]:text-2xl'>
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className='mb-6 mt-4 list-disc space-y-2 pl-10 text-h6'>
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className='mb-6 mt-4 list-decimal space-y-2 pl-10 text-h6'>
        {children}
      </ol>
    ),
  },

  marks: {
    link: ({ value, children }) => (
      <Link
        className='text-primary decoration-[1.5px] selection:text-secondary/80 hover:underline'
        href={value.href}>
        {children}
      </Link>
    ),
    dropcap: ({ children }) => (
      <span className='float-left mr-3 text-[64px] leading-10'>{children}</span>
    ),
  },
}

const PostBody = ({ article }) => {
  return (
    <article className='mt-4'>
      <h1 className='text-h3 text-black mb-8 lg:text-h2'>{article.title}</h1>
      <PortableText value={article.body} components={RichTextComponents} />
      <figure className='mt-7 lg:my-12'>
        <div className='flex w-full gap-2 mb-2 md:gap-4 lg:mb-4 lg:gap-8'>
          {article.inlineImages?.map(img => {
            return (
              <div
                key={img}
                className='relative flex-1 aspect-square min-w-[85px] min-h-[85px] rounded-lg overflow-clip'>
                <Image
                  className='object-cover'
                  src={imgUrl(img).url()}
                  alt=''
                  fill
                />
              </div>
            )
          })}
        </div>

        <figcaption className='text-center text-xs text-black/50 italic md:text-sm lg:text-md-150'>
          {article.inlineImagesCaption}
        </figcaption>
      </figure>

      {article.body2 && (
        <PortableText value={article.body2} components={RichTextComponents} />
      )}
    </article>
  )
}

export default PostBody
