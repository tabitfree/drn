import React from 'react'
import { Container } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image'
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'

import OfficeCarousel from '../content/OfficeCarousel'

const Offices = ({ colors, button, width }) => {
  const { t } = useTranslation('homepage')
  return (
    <Container className="offices-hp-inner d-flex">
      <ScrollAnimation animateIn="fadeIn" animateOnce={true} className="w-33">
        <h2 style={{ color: colors.main }}>{t('officesTitle')}</h2>
        <p>{t('officesText')}</p>
        {button}
      </ScrollAnimation>
      <>
        <OfficeCarousel width={width} />
      </>
    </Container>
  )
}

export default Offices
