import React from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const Awards = ({ colors }) => {
  const { t } = useTranslation('building')
  const awards = [
    {
      img: './images/awards-1.jpg',
      title: 'European Concrete Award 2018',
    },
    {
      img: './images/awards-2.jpg',
      title: t('award1'),
    },
    {
      img: './images/awards-3.jpg',
      title: t('award2'),
    },
    {
      img: './images/awards-4.jpg',
      title: t('award5'),
    },
    {
      img: './images/zelena-strecha.png',
      title: t('award3'),
    },
    {
      img: './images/cbs_logo.svg',
      title: t('award4'),
    },
  ]
  return (
    <Container className="awards-container">
      <h2 style={{ color: colors.main }} className="text-center">
        {t('awardsTi')}
      </h2>
      <div className="d-flex align-items-center flex-wrap justify-content-around">
        {awards.map((award, idx) => (
          <div className="award-item text-center" key={idx}>
            <img src={award.img} />
            <p>{award.title}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Awards
