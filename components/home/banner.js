import React from 'react'
import Image from 'next/image'

import style from '@/components/home/banner.module.scss'

export default function HomeBanner() {
  return (
        <article className={`${style['home-banner']}`}>
            <div className={`${style['home-banner__content']}`}>
                <Image
                src={'/images/banner.jpg'}
                layout={'fill'}
                objectFit={'cover'}
                objectPosition={'center'}
                className={`${style['home-banner__image']}`}
                />
                <h3 className={`${style['home-banner__subtitle']}`}>Lorem Ipsum</h3>
                <h1 className={`${style['home-banner__title']}`}>Dolor cacildes mininis</h1>
                <a className={`${style['home-banner__button']}`}>Contato</a>
            </div>
        </article>
  )
}
