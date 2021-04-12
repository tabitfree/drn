import React from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'

const About = ({ colors }) => {
  const { t } = useTranslation('building')
  return (
    <Container>
      <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
        <h2 style={{ color: colors.main }}>{t('aboutTi')}</h2>
      </ScrollAnimation>
      <div className="container-p-img d-flex">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <p>{t('aboutTe')}</p>
          <ul>
            <li>{t('about1')}</li>
            <li>{t('about2')}</li>
            <li>{t('about3')}</li>
            <li>{t('about4')}</li>
            <li>{t('about5')}</li>
            <li>{t('about6')}</li>
          </ul>
          <p>{t('aboutTxt')}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <img src="./images/upae-5.jpg" className="w-100" />
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true} type="whole">
        <img src="./images/upae-6.jpg" type="whole" className="w-100" />
      </ScrollAnimation>
      <div className="arch-imgs" type="whole">
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOnce={true}
          className="sf-img left"
        >
          <img src="./images/upae-7.jpg" className="w-100" />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOnce={true}
          className="sf-img"
        >
          <img src="./images/upae-8.jpg" className="w-100" />
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <iframe
          src="https://player.vimeo.com/video/378024629"
          frameborder="0"
          width="1110"
          height="650"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
      </ScrollAnimation>
    </Container>
  )
}

export default About
