import React from 'react'

const OfficeCarouselItem = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.image}`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        boxShadow: `inset 0 0 0 1000px rgba(0,0,0,.2)`,
      }}
    >
      <div className="position-absolute">
        <p>{props.title}</p>
        <p>{props.subtitle}</p>
      </div>
    </div>
  )
}

export default OfficeCarouselItem
