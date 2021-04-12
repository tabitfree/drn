import React from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation, Trans } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'

const Architecture = ({ colors }) => {
  const { t } = useTranslation('building')
  return (
    <Container className="architecture-container">
      <div className="arch-imgs">
        <ScrollAnimation
          animateIn="fadeInLeft"
          className="sf-img left"
          animateOnce={true}
        >
          <img src="./images/upae-1.jpg" className="w-100" />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          className="sf-img"
          animateOnce={true}
        >
          <img src="./images/upae-2.jpg" className="w-100" />
        </ScrollAnimation>
      </div>
      <ScrollAnimation
        animateIn="fadeInLeft"
        animateOnce={true}
        className="w-50"
        title="Architecture"
      >
        <h2 style={{ color: colors.main }}>{t('historyTi')}</h2>
        <p>{t('historyTe')} </p>
        <p>{t('quote')}</p>
        <p className="text-right">{t('quoteAuthor')} </p>
      </ScrollAnimation>
      <div title="History and architecture">
        <div className="d-flex">
          <ScrollAnimation
            className="half-p"
            animateIn="fadeInLeft"
            animateOnce={true}
          >
            <p>
              <Trans>{t('para1')}</Trans>
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            className="half-p"
            animateIn="fadeInRight"
            animateOnce={true}
          >
            <p>{t('para2')}</p>
          </ScrollAnimation>
        </div>
      </div>
      <div className="arch-imgs">
        <ScrollAnimation
          animateIn="fadeInLeft"
          className="sf-img left"
          animateOnce={true}
        >
          <img src="./images/upae-3.jpg" className="w-100" />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          className="sf-img"
          animateOnce={true}
        >
          <img src="./images/upae-4.jpg" className="w-100" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}

export default Architecture
