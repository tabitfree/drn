import React, { useState } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'

const ContactInfoContent = () => {
  const { t } = useTranslation('contact')
  const [tel, setTel] = useState('./images/tel-icon.png')
  const [mail, setMail] = useState('./images/mail-icon.png')
  const [loc, setLoc] = useState('./images/location-icon.png')
  const [fb, setFb] = useState('./images/fb-icon.png')
  const [parking, setParking] = useState('./images/parking.svg')
  const [bus, setBus] = useState('./images/bus.svg')
  const [plane, setAirplane] = useState('./images/plane.svg')
  const [subway, setSubway] = useState('./images/subway.svg')

  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true} className="w-50">
      <h2>{t('contactTi')}</h2>
      <p>{t('contactTe')}</p>
      <div className="contact-info-item">
        <a
          href="https://www.google.com/maps/place/N%C3%A1rodn%C3%AD+135,+110+00+Star%C3%A9+M%C4%9Bsto/@50.081577,14.4152391,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94ee261dac81:0x70493c7cddd71225!8m2!3d50.0815736!4d14.4174278"
          target="_blank"
          className="d-inline-flex"
        >
          <img src={loc} style={{ width: '14px', height: '18px' }} />
          <p className="mb-0">
            <Trans>{t('contactAddress')}</Trans>
          </p>
        </a>
      </div>
      <div className="contact-info-item">
        <a
          href="tel:+420242434200"
          className="d-inline-flex align-items-center"
        >
          <img src={tel} style={{ width: '16px', height: '16px' }} />
          <p className="mt-auto mb-0">+420 242 434 200</p>
        </a>
      </div>
      <div className="contact-info-item">
        <a
          href="mailto:info@drn.cz"
          className="d-inline-flex align-items-center"
        >
          <img src={mail} style={{ width: '16px', height: '16px' }} />
          <p className="mb-0 mt-auto">info@drn.cz</p>
        </a>
      </div>
      <div className="connectivity-wrapper">
        <h2 className="">{t('contactConnectivity')}</h2>
        <div className="contact-info-item d-flex align-items-center">
          <img src={parking} style={{ width: '16px', height: '16px' }} />
          <p className="mt-auto mb-0">{t('parking')}</p>
        </div>
        <div className="contact-info-item d-flex align-items-center">
          <img src={bus} style={{ width: '16px', height: '16px' }} />
          <p className="mt-auto mb-0">{t('publicTransport')}</p>
        </div>
        <div className="contact-info-item d-flex align-items-center">
          <img src={plane} style={{ width: '16px', height: '16px' }} />
          <p className="mt-auto mb-0">{t('airport')}</p>
        </div>
        <div className="contact-info-item d-flex align-items-center">
          <img src={subway} style={{ width: '16px', height: '16px' }} />
          <p className="mt-auto mb-0">{t('subway')}</p>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default ContactInfoContent
