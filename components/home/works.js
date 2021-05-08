import React from 'react'

import style from '@/components/home/works.module.scss'

export default function HomeWorks() {
  const items = ['one', 'two', 'three', 'four']
  return (
        <div className={`${style['home-works']}`}>
            <div className={`${style['home-works__content']}`}>
                <h2 className={`${style['home-works__title']}`}>Lorem Ipsum</h2>
                <h3 className={`${style['home-works__subtitle']}`}>Incididunt quis nostrud minim velit est dolore deserunt id deserunt nulla sit commodo aute.</h3>

                <div className={`${style['home-works__container']}`}>
                    {items.map((el) => {
                      return (
                          <>
                            <div className={`${style['home-works__item']}`} data-test={el}>
                                <img
                                src={'/images/home-works.png'}
                                className={`${style['home-works__item-image']}`}
                                />
                            </div>
                        </>
                      )
                    })}
                </div>
            </div>
        </div>
  )
}
