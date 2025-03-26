import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'n0xsvnib',
  dataset: 'production',
  apiVersion: '2024-12-17',
  useCdn: true,
})

export const getPostSlice = async sliceEnd => {
  sliceEnd = sliceEnd || 8

  const posts = client.fetch(
    `*[_type == "post"] | order(publishedAt desc) [0...$sliceEnd]
      {slug{current}, title, mainImage, category->{title}, isFeatured, publishedAt, "bodyTextLength": length(pt::text(body))}`,
    { sliceEnd },
    { next: { tags: ['postCollection'] } }
  )

  return posts
}

export const getPostsByTag = async tagName => {
  const posts = await client.fetch(
    `{ 
        'tag' : *[_type == 'tag' && title match $tagName][0] {title, coverImage}, 
        'posts' : *[_type == "post" && tags[]->title match $tagName] | order(publishedAt desc)
          {_id, slug{current}, title, mainImage, category->{title}, isFeatured, publishedAt, "bodyTextLength": length(pt::text(body))}
      }`,
    { tagName },
    { next: { tags: ['postCollection'] } }
  )

  return posts
}

export const getSinglePost = async (slug, sliceEnd) => {
  const singlePost = await client.fetch(
    `*[slug.current match $slug][0] 
        {_id, title, mainImage, body, publishedAt, tags[]->{_id, title}, 
          'relatedPosts': *[_type=='post'  
            && references(^.tags[]._ref) 
            && !(title == ^.title )
          ] | order(publishedAt desc) [0...$sliceEnd] {
            _id, slug{current}, title, mainImage, 
            publishedAt, 'bodyTextLength': length(pt::text(body))
          }
        }`,
    { slug, sliceEnd }
  )

  return singlePost
}
