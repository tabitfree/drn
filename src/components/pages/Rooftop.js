import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import ScrollAnimation from 'react-animate-on-scroll'

import Hero from '../Hero'
import SFZone from '../rt-components/SFZone'
import Community from '../hp-components/Community'
import { useTranslation } from 'react-i18next'

const Rooftop = ({ colors }) => {
  const { t } = useTranslation('rooftop')
  return (
    <>
      <Helmet>
        <title>DRN | Rooftop</title>
      </Helmet>
      <section className="hero-rt hero">
        <Hero
          typeContent="./images/benefits-1.png"
          title={t('heroTi')}
          text={t('heroTe')}
          colors={colors}
          type="icon"
        />
      </section>
      <section className="sfzone">
        <SFZone colors={colors} />
      </section>
      <section className="community">
        <Community colors={colors} />
      </section>
    </>
  )
}

export default Rooftop
