import React from 'react'
import Image from 'next/image'

import style from '@/components/home/bio.module.scss'

export default function HomeBio() {
  return (
        <article className={`${style['home-bio']}`}>
            <div className={`${style['home-bio__content']}`}>
                <Image
                src={'/images/home-bio.png'}
                width={480}
                height={480}
                className={`${style['home-bio__image']}`}
                />
                <div className={`${style['home-bio__container']}`}>
                    <h2 className={`${style['home-bio__title']}`}>Bio</h2>
                    <p className={`${style['home-bio__text']}`}>
                        <strong>Consectetur eiusmod dolor commodo occaecat commodo mollit occaecat occaecat et eiusmod voluptate. Occaecat elit id irure sint laboris non adipisicing cupidatat commodo. Aute velit ut nulla nostrud Lorem aliquip nostrud magna est ut exercitation aliqua aliqua. Ut tempor deserunt dolor elit cillum exercitation excepteur id est occaecat adipisicing.</strong>
                        <br/>
                        <br/>
                        Adipisicing ea id aliquip id non voluptate nulla voluptate pariatur occaecat nostrud veniam. Elit nisi tempor quis ad officia consectetur nostrud eiusmod elit quis eu esse occaecat. Duis ipsum deserunt cillum ex occaecat ullamco fugiat esse esse anim nulla.
                    </p>

                    <a className={`${style['home-bio__button']}`}>Leia Mais</a>
                </div>
            </div>
        </article>
  )
}
