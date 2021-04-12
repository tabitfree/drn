import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'

const Benefits = ({ colors }) => {
  const { t } = useTranslation('offices')
  const benefitsCards = [
    {
      title: t('designTi'),
      text: t('designTe'),
      icon: './images/design.svg',
      iconWidth: '35px',
      iconHeight: '35px',
    },
    {
      title: t('varTi'),
      text: t('varTe'),
      icon: './images/variety.svg',
      iconWidth: '35px',
      iconHeight: '35px',
    },

    {
      title: t('locTi'),
      text: t('locTe'),
      icon: './images/location.svg',
      iconWidth: '35px',
      iconHeight: '35px',
    },
    {
      title: t('securityTi'),
      text: t('securityTe'),
      icon: './images/securty.svg',
      iconWidth: '35px',
      iconHeight: '35px',
    },
    {
      title: t('facilitiesTi'),
      text: t('facilitiesTe'),
      icon: './images/cycle.svg',
      iconWidth: '35px',
      iconHeight: '35px',
    },
    {
      title: t('parkingTi'),
      text: t('parkingTe'),
      icon: './images/parking copy.svg',
      iconWidth: '35px',
      iconHeight: '35px',
    },
    {
      title: t('courtyardTi'),
      text: t('courtyardTe'),
      icon: './images/yard.svg',
      iconWidth: '35px',
      iconHeight: '35px',
    },
    {
      title: t('roofTi'),
      text: t('roofTe'),
      icon: './images/roof.svg',
      iconWidth: '35px',
      iconHeight: '35px',
    },
    {
      title: t('gastTi'),
      text: t('gastTe'),
      icon: './images/gastro.svg',
      iconWidth: '35px',
      iconHeight: '35px',
    },
    {
      title: t('comTi'),
      text: t('comTe'),
      icon: './images/community.svg',
      iconWidth: '35px',
      iconHeight: '35px',
    },
  ]

  return (
    <Container className="benefits-container d-flex">
      <ScrollAnimation
        animateIn="fadeInLeft"
        animateOnce={true}
        className="benefits-left"
      >
        <h2 style={{ color: colors.main }}>{t('benTi')}</h2>
        <p>{t('benTe')} </p>
        <Link to="/building" className="btn dark-variant">
          {t('benBtn')}
        </Link>
      </ScrollAnimation>
      <div className="d-flex  flex-wrap">
        {benefitsCards.map((card, idx) => (
          <ScrollAnimation
            animateIn="fadeIn"
            animateOnce={true}
            className="benefit-card d-flex"
            key={idx}
          >
            <div className="benefit-card-img-wrapper">
              <img
                src={card.icon}
                style={{ width: card.iconWidth, height: card.iconHeight }}
              />
            </div>
            <div>
              <p className="small-title">{card.title}</p>
              <p>{card.text}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  )
}

export default Benefits
