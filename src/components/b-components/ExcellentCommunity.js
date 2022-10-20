import React from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import CommunityCarouselItem from '../content/CommunityCarouselItem'
import ScrollAnimation from 'react-animate-on-scroll'

const ExcellentCommunity = (props) => {
  const { t } = useTranslation('building')
  const colors = props.colors
  const cards = [
    {
      icon: './images/wework-logo.png',
      text: t('wework'),
      website: 'www.wework.com',
    },
    {
      icon: './images/sebre-logo.png',
      text: t('sebre'),
      website: 'www.sebre.cz',
    },
    {
      icon: './images/nano-logo.svg',
      text: t('nano'),
      website: 'www.nanoenergies.cz',
    },
    {
      icon: './images/ctp-logo.jpg',
      text: t('ctp'),
      website: 'www.ctp.eu',
    },
    {
      icon: './images/losteria-logo.png',
      text: t('losteria'),
      website: 'www.losteria.net',
    },
    {
      icon: './images/aether-logo.svg',
      text: t('aether'),
      website: 'www.aetherclinic.com',
    },
    {
      icon: './images/duhovka-logo.png',
      text: t('duhovka'),
      website: 'www.duhovkagroup.cz',
    },
    {
      icon: './images/gzs-logo.png',
      text: t('gzs'),
      website: 'www.zdeneksklenar.cz',
    },
    {
      icon: './images/zsf-logo.svg',
      text: t('zsf'),
      website: 'www.zdeneksklenar.cz',
    },
    {
      icon: './images/urarasku-logo.png',
      text: t('urarasku'),
      website: 'www.urarasku.cz',
    },
    {
      icon: './images/cafe-logo.png',
      text: t('cafe'),
      website: 'www.facebook.com/drncafe',
    },
  ]

  return (
    <Container>
      <div className='w-50'>
        <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
          <h2 style={{ color: colors.main }}>{props.title}</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeInRight' animateOnce={true}>
          <p>{props.text}</p>
        </ScrollAnimation>
      </div>
      <div className='exc-cards-container d-flex flex-wrap'>
        {cards.map((card, idx) => {
          return (
            <CommunityCarouselItem
              icon={card.icon}
              text={card.text}
              website={card.website}
              colors={colors}
              id={idx}
              key={idx}
            />
          )
        })}
      </div>
    </Container>
  )
}

export default ExcellentCommunity
