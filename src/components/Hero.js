import React from 'react'
import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const Hero = (props) => {
  const style =
    props.type === 'text'
      ? { paddingRight: '136px' }
      : { paddingRight: '156px' }

  const { t } = useTranslation('building')

  return (
    <Container>
      <div className='hero-cont w-50' style={style}>
        {props.type === 'icon' ? (
          <img src={props.typeContent} />
        ) : (
          <p>{props.typeContent}</p>
        )}
        <h1 style={{ color: props.colors.main }}>{props.title}</h1>
        {props.text !== '' ? <p>{props.text}</p> : ''}

        {props.certificate && (
          <div className='hero-logo'>
            <img src='./images/breeam.png' />
            <p>{t('certificate')}</p>
          </div>
        )}
      </div>
    </Container>
  )
}

export default Hero
