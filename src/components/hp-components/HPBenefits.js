import React from 'react'

import { Link } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'

const HPBenefits = (props) => {
  const { t } = useTranslation('homepage')
  const cards = [
    {
      cardImg: './images/benefits-1.png',
      cardTitle: t('uniqueTerraceTitle'),
      cardText: t('uniqueTerraceText'),
      cardLinkTo: '/rooftop',
      cardLink: t('uniqueTerraceBtn'),
    },
    {
      cardImg: './images/benefits-2.png',
      cardTitle: t('uniqueGastTitle'),
      cardText: t('uniqueGastText'),
      cardLinkTo: '/gastro',
      cardLink: t('uniqueGastBtn'),
    },
  ]

  return props.width > 576 ? (
    <Container>
      <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
        <div className="benefits-content-wrapper ml-auto w-63">
          <h2 style={{ color: props.colors.main }}>
            {t('uniqueBenefitsTitle')}
          </h2>
          <div className="d-flex flex-wrap">
            {cards.map((card, idx) => (
              <Card className="w-50" border="white" key={idx}>
                <Card.Body>
                  <Card.Img src={card.cardImg} variant="icon" />
                  <Card.Title>{card.cardTitle}</Card.Title>
                  <Card.Text>{card.cardText}</Card.Text>
                  <Link
                    to={card.cardLinkTo}
                    className="underlined-btn dark-underlined"
                  >
                    {card.cardLink}
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </Container>
  ) : (
    <>
      <img src="./images/unique-benefits-respo.png" className="w-100 pb-5" />
      <Container>
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <div className="w-100">
            <h2 className="w-50" style={{ color: props.colors.main }}>
              Unique benefits
            </h2>
            <div className="d-flex flex-wrap">
              {cards.map((card, idx) => (
                <Card className="w-50" border="white" key={idx}>
                  <Card.Body>
                    <Card.Img src={card.cardImg} variant="icon" />
                    <Card.Title>{card.cardTitle}</Card.Title>
                    <Card.Text>{card.cardText}</Card.Text>
                    <Link
                      to="/rooftop"
                      className="underlined-btn dark-underlined"
                    >
                      {card.cardLink}
                    </Link>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </Container>
    </>
  )
}

export default HPBenefits
