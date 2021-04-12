import React, { useEffect } from 'react'
import { Container, Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'

const Unique = ({ colors, communityRef }) => {
  const { t } = useTranslation('building')
  var comScroll = 0
  useEffect(() => {
    comScroll = () =>
      document
        .getElementById('community-sec')
        .scrollIntoView({ behavior: 'smooth' })
  }, [])
  const cards = [
    {
      cardImg: './images/benefits-4.png',
      cardTitle: t('officesTi'),
      cardText: t('officesTe'),
      cardLink: t('officesBtn'),
      cardLinkTo: './offices',
    },
    {
      cardImg: './images/benefits-1.png',
      cardTitle: t('rooftopTi'),
      cardText: t('rooftopTe'),
      cardLink: t('rooftopBtn'),
      cardLinkTo: './rooftop',
    },
    {
      cardImg: './images/benefits-2.png',
      cardTitle: t('gastroTi'),
      cardText: t('gastroTe'),
      cardLink: t('gastroBtn'),
      cardLinkTo: './gastro',
    },
    {
      cardImg: './images/benefits-3.png',
      cardTitle: t('communityTi'),
      cardText: t('communityTe'),
      cardLink: t('communityBtn'),
      cardLinkTo: 'community',
    },
  ]
  return (
    <Container className="upae-cont">
      <div className="w-50">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <h2 style={{ color: colors.main }}>{t('uniTi')} </h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <p>{t('uniTe')}</p>
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <div className="d-flex flex-wrap unique-cards">
          {cards.map((card, idx) => (
            <Card className="w-50 position-relative" border="white" key={idx}>
              <Card.Body>
                <Card.Img src={card.cardImg} variant="icon" />
                <Card.Title>{card.cardTitle}</Card.Title>
                <Card.Text>{card.cardText}</Card.Text>
                {card.cardLinkTo != 'community' && (
                  <Link
                    to={card.cardLinkTo}
                    className="underlined-btn dark-underlined position-absolute"
                    style={{ bottom: 0 }}
                  >
                    {card.cardLink}
                  </Link>
                )}
                {card.cardLinkTo == 'community' && (
                  <a
                    href={`#${card.cardLinkTo}-sec`}
                    className="underlined-btn dark-underlined position-absolute"
                    style={{ bottom: 0 }}
                  >
                    {card.cardLink}
                  </a>
                )}
              </Card.Body>
            </Card>
          ))}
        </div>
      </ScrollAnimation>
    </Container>
  )
}

export default Unique
