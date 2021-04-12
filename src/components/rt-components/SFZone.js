import React from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'

const SFZone = ({ colors }) => {
  const { t } = useTranslation('rooftop')
  return (
    <Container>
      <div className="w-50">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <h2 style={{ color: colors.main }}>{t('sfTi')}</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <p style={{ color: colors.darkText }}>{t('sfTe')}</p>
        </ScrollAnimation>
      </div>
      <div className="d-flex mb-64">
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOnce={true}
          className="sf-img left"
        >
          <img src="./images/sf-1.jpg" className="w-100" />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOnce={true}
          className="sf-img"
        >
          <img src="./images/sf-2.jpg" className="w-100" />
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
        <h2 className="w-50 ml-auto">{t('sfp1Ti')}</h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
        <p className="w-50 ml-auto">{t('sfp1Te')}</p>
      </ScrollAnimation>
      <div className="d-flex">
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOnce={true}
          className="sf-img left"
        >
          <img src="./images/sf-3.jpg" className="w-100" />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOnce={true}
          className="sf-img"
        >
          <img src="./images/sf-4.jpg" className="w-100" />
        </ScrollAnimation>
      </div>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce={true}
        className="mb-64"
      >
        <img src="./images/sf-5.jpg" type="whole" className="w-100" />
        <p className="img-info">{t('underImage')}</p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
        <h2 className="w-50 mr-auto">{t('sfp2Ti')}</h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
        <p className="w-50 mr-auto">{t('sfp2Te')}</p>
      </ScrollAnimation>
    </Container>
  )
}

export default SFZone
