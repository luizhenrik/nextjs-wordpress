import React from 'react'
import Layout from '@/components/layout'
import HomeBio from '@/components/home/bio'
import HomeBanner from '@/components/home/banner'
import HomeServices from '@/components/home/services'

export default function Home() {
  return (
    <Layout title={'teste'}>
        <HomeBanner/>
        <HomeServices/>
        <HomeBio/>
    </Layout>
  )
}
