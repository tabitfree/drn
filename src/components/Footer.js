import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Trans, useTranslation } from 'react-i18next'
import { Link, withRouter } from 'react-router-dom'
import FooterContentRow from './FooterContentRow'
import ScrollAnimation from 'react-animate-on-scroll'
import AdvLogo from './AdvLogo'

const Footer = (props) => {
  const { t } = useTranslation('footer')
  const colors = props.colors
  const width = props.width
  const [map, contactMap] = [
    './images/footer-map.png',
    './images/map-contact.png',
  ]
  const pin = './images/map-pin.png'
  return (
    <Container className="footer mw-100 p-0">
      <div className="d-flex w-100">
        {width > 767 ? (
          <>
            <a
              href="https://www.google.com/maps/place/N%C3%A1rodn%C3%AD+135,+110+00+Star%C3%A9+M%C4%9Bsto/@50.0815736,14.4152391,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94ee261dac81:0x70493c7cddd71225!8m2!3d50.0815736!4d14.4174278"
              target="_blank"
              className={
                props.location.pathname != '/contact'
                  ? 'w-50 footer-map'
                  : 'w-100 footer-map contact-map'
              }
              style={
                props.location.pathname == '/contact'
                  ? {
                      height: '623px',
                      background: `url(${contactMap})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                    }
                  : {
                      background: `url(${map})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                    }
              }
            >
              <img className="position-relative" src={pin} alt="map" />
              <div
                className="map-text"
                style={
                  props.location.pathname == '/contact'
                    ? { left: '50%' }
                    : { left: '25%' }
                }
              >
                <p className="bold">{t('addressTi')}</p>
                <Trans>
                  <p className="normal">{t('address')}</p>
                </Trans>
              </div>
            </a>
            {props.location.pathname != '/contact' && (
              <div
                className="w-50 footer-contact"
                style={{
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              >
                <h2 style={{ color: colors.main }}>{t('Ti')} </h2>
                <p>{t('Te1')}</p>
                <p
                  style={{
                    color: colors.darkText,
                    fontSize: '18px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                >
                  <Trans>{t('Te2')}</Trans>
                </p>
                <Link to="/contact" className="btn dark-variant">
                  {t('btn')}
                </Link>
              </div>
            )}
          </>
        ) : (
          <>
            <a
              href="https://www.google.com/maps/place/N%C3%A1rodn%C3%AD+135,+110+00+Star%C3%A9+M%C4%9Bsto/@50.0815736,14.4152391,17z/data=!3m1!4b1!4m5!3m4!1s0x470b94ee261dac81:0x70493c7cddd71225!8m2!3d50.0815736!4d14.4174278"
              target="_blank"
              className="w-100 footer-map"
              style={{ height: '300px', background: `url(${contactMap})` }}
            >
              <img className="position-relative" src={pin} alt="map" />
              <div className="map-text">
                <p className="bold">{t('addressTi')}</p>
                <p className="normal">
                  <Trans>{t('address')}</Trans>
                </p>
              </div>
            </a>

            {props.location.pathname != '/contact' ? (
              <div className="w-100 footer-contact">
                <Container>
                  <h2 style={{ color: colors.main }}>{t('Ti')}</h2>
                  <p>{t('Te1')}</p>
                  <p style={{ color: colors.darkText, fontSize: '18px' }}>
                    {t('Te2')}
                  </p>
                  <Link to="/contact" className="btn dark-variant">
                    {t('btn')}
                  </Link>
                </Container>
              </div>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
      <Container>
        <Row className="footer-logo-wrapper">
          <img src="./images/logo.svg" alt="DRN logo" />
        </Row>
        <FooterContentRow width={width} />
        <AdvLogo />        
      </Container>
    </Container>
  )
}

export default withRouter(Footer)
