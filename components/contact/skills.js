import React from 'react'

import style from '@/components/contact/skills.module.scss'

export default function ContactSkills() {
  return (
        <div className={`${style['contact-skills']}`}>
            <div className={`${style['contact-skills__content']}`}>
                <h3 className={`${style['contact-skills__subtitle']}`}>Minhas habilidades</h3>
                <h2 className={`${style['contact-skills__title']}`}>Minha expertise</h2>

                <img
                src={'/images/contact-skills.png'}
                width={480}
                height={480}
                className={`${style['contact-skills__image']}`}
                />

                <div className={`${style['contact-skills__container']}`}>
                    lista aqui
                </div>
            </div>
        </div>
  )
}
