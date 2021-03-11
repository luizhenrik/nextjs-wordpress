import React from 'react'
import { getAllPostsWithSlug, getPost } from '@/lib/api'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Post({ postData }) {
  const router = useRouter()

  if (!router.isFallback && !postData?.slug) {
    return <p>IHHH mano deu ruim</p>
  }

  return (
        <>
        {router.isFallback
          ? (
            <h1>Loading...</h1>
            )
          : (
              <>
            <h1>{postData.title}</h1>

            <div
            className={'post-content content'}
            dangerouslySetInnerHTML={{ __html: postData.content }}/>
            </>
            )}
        <p>
            <Link href={'/blog'}>
                <a>Voltar</a>
            </Link>
        </p>
        </>
  )
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map((node) => `/blog/${node.slug}`) || [],
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const data = await getPost(params.slug)

  return {
    props: {
      postData: data.post
    }
  }
}
