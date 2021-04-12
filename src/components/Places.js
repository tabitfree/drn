import React from 'react'
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'

const Places = ({ colors, width }) => {
  const { t } = useTranslation('gastronomy')
  return (
    <>
      <div className="bigger-container img-left-type position-relative d-flex">
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOnce={true}
        >
          <img src="./images/places-1.jpg" className="w-100" />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOnce={true}
          className="d-flex places-container"
        >
          <div className={width > 991 ? 'ml-auto' : 'mr-auto'}>
            <h2 style={{ color: colors.main }}>{t('losteriaTi')} </h2>
            <p>{t('losteriaTe')}</p>
            <p>{t('losteriaVisit')} </p>
            <a
              href="https://www.losteria.net"
              target="_blank"
              className="btn dark-variant"
            >
              losteria.net
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="bigger-container img-right-type position-relative d-flex">
        {width <= 991 && (
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <img src="./images/places-2.jpg" className="w-100" />
          </ScrollAnimation>
        )}
        <ScrollAnimation
          animateIn={width > 991 ? 'fadeInLeft' : 'fadeInRight'}
          animateOnce={true}
          className="d-flex places-container"
        >
          <div className={width > 991 ? 'ml-auto' : 'mr-auto'}>
            <h2 style={{ color: colors.main }}>{t('uraraskuTi')} </h2>
            <p>{t('uraraskuTe')}</p>
            <div className="places-contact">
              <a href="tel:+420222101210" className="d-flex">
                <img src="./images/tel-icon.png" />
                <span>+420 222 101 210</span>
              </a>
              <a href="mailto:info@drncafe.cz" className="d-flex">
                <img src="./images/mail-icon.png" />
                <span>urarasku@urarasku.cz</span>
              </a>
            </div>
            <a
              href="https://www.urarasku.cz"
              target="_blank"
              className="btn dark-variant"
            >
              urarasku.cz
            </a>
          </div>
        </ScrollAnimation>
        {width > 991 && (
          <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
            <img src="./images/places-2.jpg" className="w-100" />
          </ScrollAnimation>
        )}
      </div>
      <div className="bigger-container img-left-type position-relative d-flex">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <img src="./images/places-3.jpg" className="w-100" />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOnce={true}
          className="d-flex places-container"
        >
          <div className={width > 991 ? 'ml-auto' : 'mr-auto'}>
            <h2 style={{ color: colors.main }}>{t('cafeTi')} </h2>
            <p>{t('cafeTe')}</p>
            <div className="places-contact">
              <a href="tel:+420607441332" className="d-flex align-items-center">
                <img src="./images/tel-icon.png" />
                <span>+420 607 441 332</span>
              </a>
              <a href="mailto:info@drncafe.cz" className="d-flex">
                <img src="./images/mail-icon.png" />
                <span>info@drncafe.cz</span>
              </a>
            </div>
            <a
              href="https://www.facebook.com/drncafe"
              target="_blank"
              className="btn dark-variant"
            >
              facebook.com/drncafe
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </>
  )
}

export default Places
