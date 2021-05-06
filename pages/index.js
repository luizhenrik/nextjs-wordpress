import React from 'react'
import Layout from '@/components/layout'
import HomeBio from '@/components/home/bio'
import HomeBanner from '@/components/home/banner'
import HomeServices from '@/components/home/services'
import HomeInsta from '@/components/home/insta'

export default function Home() {
  return (
    <Layout title={'Home'}>
        <HomeBanner/>
        <HomeServices/>
        <HomeInsta/>
        <HomeBio/>
    </Layout>
  )
}
