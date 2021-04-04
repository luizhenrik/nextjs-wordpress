import React from 'react'
import Layout from '@/components/layout'
import HomeBio from '@/components/home/bio'
import HomeBanner from '@/components/home/banner'

export default function Home() {
  return (
    <Layout title={'teste'}>
        <HomeBanner/>
        <HomeBio/>
    </Layout>
  )
}
