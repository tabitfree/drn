import React from 'react'
import { Helmet } from 'react-helmet'
import ScrollAnimation from 'react-animate-on-scroll'
import { Container } from 'react-bootstrap'
import CommunityCarousel from '../content/CommunityCarousel'
import { useTranslation, Trans } from 'react-i18next'

const Community = (props) => {
  const { t } = useTranslation('homepage')
  return (
    <Container>
      <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
        <h2 style={{ color: props.colors.main }}>{t('communityTi')}</h2>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
        <p style={{ color: props.colors.darkText }}>
          <Trans i18nKey="communityTe">{t('communityTe')}</Trans>
        </p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeUp" animateOnce={true}>
        <CommunityCarousel colors={props.colors} />
      </ScrollAnimation>
    </Container>
  )
}

export default Community
