import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'n0xsvnib',
  dataset: 'production',
  apiVersion: '2024-12-17',
  useCdn: true,
})

export const getPostSlice = async sliceEnd => {
  sliceEnd = sliceEnd || 6

  const posts = client.fetch(
    `*[_type == "post"] | order(publishedAt desc) [0...$sliceEnd]
      {slug{current}, title, mainImage, publishedAt, 'bodyTextLength': length(pt::text(body)), 'body2TextLength': length(pt::text(body2))}`,
    { sliceEnd },
    { next: { tags: ['postCollection'] } }
  )

  return posts
}

export const getSinglePost = async (slug, sliceEnd) => {
  const singlePost = await client.fetch(
    `*[slug.current match $slug][0] 
        {_id, title, mainImage, body, body2, publishedAt, tags[]->{_id, title}, 'bodyTextLength': length(pt::text(body)), 'body2TextLength': length(pt::text(body2)), inlineImages, inlineImagesCaption,
          'relatedPosts': *[_type == "post" && !(title == ^.title )] | order(publishedAt desc) [0...$sliceEnd]
      { _id, slug{current}, title, mainImage, publishedAt, body}
        }`,
    { slug, sliceEnd }
  )

  return singlePost
}

export const getPostsByTag = async tagName => {
  const posts = await client.fetch(
    `{ 
        'tag' : *[_type == 'tag' && title match $tagName][0] {title, coverImage}, 
        'posts' : *[_type == "post" && tags[]->title match $tagName] | order(publishedAt desc)
          {_id, slug{current}, title, mainImage, isFeatured, publishedAt, "bodyTextLength": length(pt::text(body))}
      }`,
    { tagName },
    { next: { tags: ['postCollection'] } }
  )

  return posts
}
