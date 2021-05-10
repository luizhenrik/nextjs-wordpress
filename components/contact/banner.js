import React from 'react'

import style from '@/components/contact/banner.module.scss'

export default function ContactBanner() {
  return (
        <article className={`${style['contact-banner']}`}>
            <div className={`${style['contact-banner__content']}`}>
                <img
                src={'/images/contact-banner.png'}
                width={480}
                height={560}
                className={`${style['contact-banner__image']}`}
                />
                <div className={`${style['contact-banner__container']}`}>
                    <h2 className={`${style['contact-banner__title']}`}>Olá, <br /> sou Lorem</h2>
                    <a className={'contact-banner__button'}>Whatsapp</a>
                    <a className={'contact-banner__button'}>Linkedin</a>
                    <a className={'contact-banner__button'}>Instagram</a>
                </div>
            </div>
        </article>
  )
}
