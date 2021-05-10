import React from 'react'
import Layout from '@/components/layout'
import ContactBanner from '@/components/contact/banner'
import ContactSkills from '@/components/contact/skills'

export default function Home() {
  return (
    <Layout title={'Contato'}>
        <ContactBanner />
        <ContactSkills />
    </Layout>
  )
}
