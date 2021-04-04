import React from 'react'

import style from './style.module.scss'

export default function Header() {
  return (
        <header className={`${style.header}`}>
            <div className={`${style.header__content}`}>
                <img className={`${style.header__logo}`} src={'http://lorempixel.com.br/285/82/?1'} />
                <div className={`${style.header__overlay}`}></div>
                <div className={`${style.header__menu}`}>
                    <a className={`${style['header__menu-item']}`}>Inicio</a>
                    <a className={`${style['header__menu-item']}`}>Contato</a>
                    <a className={`${style['header__menu-item']}`}>Blog</a>
                </div>
            </div>
        </header>
  )
}
