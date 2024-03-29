import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'

const CommunityCarouselItem = (props) => {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true} className="card">
      <Card.Body className="card-body-com-item">
        <Card.Img
          src={props.icon}
          variant="icon"
          style={{ marginBottom: '11px' }}
        />
        <Card.Title
          style={{
            fontSize: '14px',
            fontWeight: '1',
            lineHeight: '16px',
            color: props.colors.darkButton,
            marginBottom: '12px',
          }}
        >
          <a href={`https://${props.website}`} target="_blank">
            {props.website}
          </a>
        </Card.Title>
        <Card.Text
          style={{
            fontSize: '16px',
            fontWeight: '1',
            lineHeight: '24px',
            color: props.colors.darkButton,
          }}
        >
          {props.text}
        </Card.Text>
      </Card.Body>
    </ScrollAnimation>
  )
}

export default CommunityCarouselItem
