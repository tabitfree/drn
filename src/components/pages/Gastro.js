import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import Hero from '../Hero'
import Community from '../hp-components/Community'
import Places from '../Places'
import ScrollAnimation from 'react-animate-on-scroll'

const Gastro = ({ colors, width }) => {
  const { t } = useTranslation('gastronomy')
  return (
    <>
      <Helmet>
        <title>DRN | Gastro</title>
      </Helmet>
      <section className="hero-g hero">
        <Hero
          typeContent="./images/benefits-2.png"
          title={t('gastronomyTi')}
          text={t('gastronomyTe')}
          colors={colors}
          type="icon"
        />
      </section>
      <Container
        style={
          width > 767 ? { marginBottom: '123px' } : { marginBottom: '50px' }
        }
      >
        <div className={width > 580 ? 'w-50' : 'mr-auto'}>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <h2 style={{ color: colors.main }}>{t('placeTi')}</h2>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInRight"
            animateOnce={true}
          >
            <p style={{ color: colors.darkText }}>{t('placeTe')}</p>
          </ScrollAnimation>
        </div>
      </Container>
      <section className="places position-relative">
        <Places colors={colors} width={width} />
      </section>
      <section className="community">
        <Community colors={colors} />
      </section>
    </>
  )
}

export default Gastro
