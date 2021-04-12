import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AvailableOffice from './AvailableOffice'
import offices from '../assets/offices'
import { useTranslation } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'

const Availability = (props) => {
  const available = props.available
  const { t } = useTranslation('offices')

  const availableTitle =
    available && offices.length == 1 ? (
      <h2>There is one office available</h2>
    ) : available && offices.length > 1 ? (
      <h2>There are {offices.length} available offices</h2>
    ) : (
      <h2>{t('availabilityTi')}</h2>
    )

  return (
    <Container
      className={
        !available
          ? 'availability-container-unavailable d-flex justify-content-center'
          : 'availability-container-available'
      }
    >
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        {availableTitle}
        {!available ? (
          <div className="d-flex flex-column">
            <p className="text-left">{t('availabilityTe')}</p>
            <div className="d-flex justify-content-start align-items-center offices-btn-wrap">
              <Link to="/contact" className="btn dark-variant hp-btn">
                {t('availabilityBtn')}
              </Link>
              <a
                href="https://www.wework.com/buildings/drn--prague"
                target="_blank"
                className="underlined-btn dark-underlined "
              >
                {t('availabilityBtn2')}
              </a>
            </div>
          </div>
        ) : (
          offices.map((office, idx) => {
            return <AvailableOffice office={office} key={idx} />
          })
        )}
      </ScrollAnimation>
    </Container>
  )
}

export default Availability
