import React from 'react'

import style from '@/components/home/insta.module.scss'

export default function HomeInsta() {
  const items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
  return (
        <div className={`${style['home-insta']}`}>
            <div className={`${style['home-insta__content']}`}>
                <h2 className={`${style['home-insta__title']}`}>Lorem Ipsum</h2>
                <h3 className={`${style['home-insta__subtitle']}`}>Incididunt quis nostrud minim velit est dolore deserunt id deserunt nulla sit commodo aute.</h3>

                <div className={`${style['home-insta__container']}`}>
                    {items.map((el) => {
                      return (
                          <>
                            <a className={`${style['home-insta__item']}`}>
                                <img
                                src={'/images/home-insta.png'}
                                className={`${style['home-insta__item-image']}`}
                                />
                            </a>
                        </>
                      )
                    })}
                </div>
            </div>
        </div>
  )
}
