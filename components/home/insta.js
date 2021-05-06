import React from 'react'

import style from '@/components/home/insta.module.scss'

export default function HomeInsta() {
  return (
        <div className={`${style['home-insta']}`}>
            <div className={`${style['home-insta__content']}`}>
                <h2 className={`${style['home-insta__title']}`}>Instagram</h2>
                <h3 className={`${style['home-insta__subtitle']}`}>Incididunt quis nostrud minim velit est dolore deserunt id deserunt nulla sit commodo aute.</h3>
            </div>
        </div>
  )
}
