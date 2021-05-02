import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import style from './style.module.scss'
import Link from 'next/link'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [logoWidth, setLogoWidth] = useState(285)
  useEffect(() => {
    if (window.screen.width < 940) {
      setLogoWidth(189)
    } else {
      setLogoWidth(285)
    }
  }, [])
  const setToggleHeader = () => {
    setOpen(!open)
  }

  return (
        <header className={`${style.header}`} data-open={open} data-width={logoWidth} data-height={logoWidth * 28.77 / 100}>
            <div className={`${style.header__content}`}>
                <Image
                src={'/images/logo.png'}
                width={logoWidth}
                height={logoWidth * 28.77 / 100}
                className={`${style.header__logo}`}
                />
                <span className={`${style.header__handler}`} onClick={setToggleHeader}/>
                <div className={`${style.header__overlay}`} onClick={setToggleHeader}></div>
                <div className={`${style.header__menu}`}>
                    <Link href={'/'}>
                        <a className={`${style['header__menu-item']}`}>Inicio</a>
                    </Link>
                    <Link href={'/contact'}>
                        <a className={`${style['header__menu-item']}`}>Contato</a>
                    </Link>
                    <Link href={'/blog'}>
                        <a className={`${style['header__menu-item']}`}>Blog</a>
                    </Link>
                </div>
            </div>
        </header>
  )
}
