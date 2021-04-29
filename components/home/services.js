import React from 'react'

import style from '@/components/home/services.module.scss'

export default function HomeServices() {
  return (
        <div className={`${style['home-services']}`}>
            <div className={`${style['home-services__content']}`}>
                <h2 className={`${style['home-services__title']}`}>Fisioterapia e suas tecnicas</h2>
                <h3 className={`${style['home-services__subtitle']}`}>Incididunt quis nostrud minim velit est dolore deserunt id deserunt nulla sit commodo aute.</h3>

                <div className={`${style['home-services__container']}`}>
                    <div className={`${style['home-services__item']}`}>
                        <h4 className={`${style['home-services__item-title']}`}>Tecnica #1</h4>
                        <p className={`${style['home-services__item-text']}`}>Aliqua anim ut do enim consequat velit laboris nostrud Lorem deserunt do laboris. Voluptate sit anim Lorem mollit esse eiusmod dolore dolor cupidatat adipisicing.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
