import React from 'react'
import Image from 'next/image'

import style from '@/components/home/banner.module.scss'

export default function HomeBanner() {
  return (
        <article className={`${style['home-banner']}`}>
            <Image
            src={'/images/banner.jpeg'}
            layout={'fill'}
            objectFit={'cover'}
            objectPosition={'center'}
            className={`${style['home-banner__image']}`}
            />
            <h3 className={`${style['home-banner__subtitle']}`}>Fisioterapia & Exercicios</h3>
            <h1 className={`${style['home-banner__title']}`}>Fisioterapia Residencial</h1>
            <a className={`${style['home-banner__button']}`}>Contato</a>
        </article>
  )
}
