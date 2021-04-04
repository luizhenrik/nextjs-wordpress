import React from 'react'
import Head from 'next/head'

import Header from '@/components/header'

import style from './style.module.scss'

export default function Layout({ title, children }) {
  return (
    <div className={`${style.ly}`}>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="color-scheme" content="dark light" />
        </Head>

        <Header></Header>

        <main className={`${style.ly__content}`}>
            <div className={`${style.ly__container}`}>
                {children}
            </div>
        </main>

        <footer className={`${style.ly__footer}`}>
            <p className={`${style['ly__footer-text']}`}>&copy; Todos direitos reservados {process.env.VERCEL_URL}</p>
        </footer>
    </div>
  )
}
