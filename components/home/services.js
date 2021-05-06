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
                        <p className={`${style['home-services__item-text']}`}>Ad elit exercitation ex adipisicing aute eiusmod eiusmod reprehenderit. Aute aliquip aliquip eiusmod quis deserunt ipsum adipisicing aliqua ipsum amet do Lorem sunt ex. Quis consequat et qui sunt pariatur nostrud. Consequat mollit aliqua voluptate commodo minim. Do magna culpa nisi labore in magna cupidatat consectetur eiusmod.</p>
                    </div>
                    <div className={`${style['home-services__item']}`}>
                        <h4 className={`${style['home-services__item-title']}`}>Tecnica #2</h4>
                        <p className={`${style['home-services__item-text']}`}>Cupidatat est ea laboris consequat nulla tempor mollit quis qui culpa labore voluptate ex nisi. Deserunt eiusmod incididunt commodo minim in dolor. Nulla id ea ex officia proident do do Lorem irure aute occaecat velit ad sint. Dolor consequat in qui excepteur et ex incididunt reprehenderit nisi in.</p>
                    </div>
                    <div className={`${style['home-services__item']}`}>
                        <h4 className={`${style['home-services__item-title']}`}>Tecnica #3</h4>
                        <p className={`${style['home-services__item-text']}`}>Ipsum in dolore eu cillum commodo ex aliquip. Occaecat excepteur nisi dolor culpa excepteur do aliqua ea ex deserunt magna ad. Veniam ullamco laborum irure non excepteur occaecat. Duis est veniam in deserunt Lorem pariatur magna cupidatat dolore exercitation reprehenderit proident sint dolor. Incididunt cupidatat magna anim anim dolor nisi pariatur nulla cupidatat est.</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
