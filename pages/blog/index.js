import Head from 'next/head';
import Link from 'next/link';

import Layout from '@/components/layout'

// data
import { getAllPosts } from '@/lib/api';

// styles
import blogStyles from '@/styles/Blog.module.css';

export default function Blog({allPosts: {edges}}) {
    return(
        <Layout title={'Blog'}>
            <h1>Latest blog articles</h1>
            <hr />
            <section>
                {edges.map(({ node }) => (
                <div className={blogStyles.listitem} key={node.id}>
                    <div className={blogStyles.listitem__thumbnail}>
                    <figure>
                        <img
                        src={node.extraPostInfo.thumbnailImage.mediaItemUrl}
                        alt={node.title}
                        />
                    </figure>
                    </div>
                    <div className={blogStyles.listitem__content}>
                    <h2>{node.title}</h2>
                    <p>{node.extraPostInfo.authorExcerpt}</p>
                    <Link href={`/blog/${node.slug}`}>
                        <a>Read more ></a>
                    </Link>
                    </div>
                </div>
                ))}
            </section>
        </Layout>
    )
}


export async function getStaticProps() {
    const allPosts = await getAllPosts();
    return {
        props: {
            allPosts
        }
    };
}
