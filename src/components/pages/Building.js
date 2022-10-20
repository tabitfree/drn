import React, { useState, useEffect, useRef } from 'react'
import Hero from '../Hero'
import Unique from '../b-components/Unique'
import Architecture from '../b-components/Architecture'
import Awards from '../b-components/Awards'
import About from '../b-components/About'
import ExcellentCommunity from '../b-components/ExcellentCommunity'
import Offices from '../hp-components/Offices'
import Community from '../hp-components/Community'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'

const Building = ({ colors, ...props }) => {
  const { t } = useTranslation('building, homepage')
  const officeButton = (
    <Link to='/offices' className='btn dark-variant offices-btn'>
      {t('homepage:officesBtn')}
    </Link>
  )
  const comRef = useRef(null)

  return (
    <>
      <Helmet>
        <title>DRN | Building</title>
      </Helmet>
      <section className='hero hero-b'>
        <Hero
          type='text'
          title={t('building:heroTi')}
          text={t('building:heroTe')}
          colors={colors}
          certificate={true}
        />
      </section>
      <section className='upae'>
        <Unique colors={colors} />
      </section>
      <section className='architecture'>
        <Architecture colors={colors} />
      </section>
      <section className='awards'>
        <ScrollAnimation animateIn='fadeInUp' animateOnce={true}>
          <Awards colors={colors} />
        </ScrollAnimation>
      </section>
      <section className='about'>
        <About colors={colors} />
      </section>
      <section className='ex-community' id='community-sec'>
        <ExcellentCommunity
          title={t('building:excellentCommunityTi')}
          text={t('building:excellentCommunityTe')}
          colors={colors}
        />
      </section>
      <section className='offices'>
        <Offices colors={colors} button={officeButton} width={props.width} />
      </section>
      <section className='community'>
        <Community colors={colors} />
      </section>
    </>
  )
}

export default Building
