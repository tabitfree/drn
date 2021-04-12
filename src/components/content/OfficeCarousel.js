import React from 'react'
import { useTranslation } from 'react-i18next'
import Carousel from 'react-multi-carousel'
import OfficeCarouselItem from './OfficeCarouselItem'

const OfficeCarousel = React.memo((props) => {
  const { t } = useTranslation('homepage')

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 2,
      partialVisibilityGutter: 0,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1200, min: 767 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      partialVisibilityGutter: 20,
      slidesToSlide: 1,
    },
  }

  let images = [
    './images/nano-energies.jpg',
    './images/office5-min.png',
    './images/aether-clinic-min.jpg',
    './images/office3.png',
    './images/office6-min.jpg',
    './images/office7-min.jpg',
  ]

  let titles = [
    t('offices2Ti'),
    t('offices5Ti'),
    t('offices4Ti'),
    t('offices3Ti'),
    t('officesGeneralTi'),
    t('officesGeneralTi'),
  ]

  let subtitles = [
    t('offices2Te'),
    t('offices5Te'),
    t('offices4Te'),
    t('offices3Te'),
    t('officesGeneralTe'),
    t('officesGeneralTe'),
  ]
  
  function CustomLeftArrow({ onClick, className }) {
    return (
      <button
        onClick={() => onClick()}
        className={`custom-arrow custom-arrow-left d-block ${className}`}
      />
    )
  }
  function CustomRightArrow({ onClick, className }) {
    return (
      <button
        onClick={() => onClick()}
        className={`custom-arrow custom-arrow-right d-block ${className}`}
      />
    )
  }
  const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest
    return (
      <div className="carousel-button-group">
        <CustomLeftArrow
          className={currentSlide === 0 ? 'disable' : ''}
          onClick={() => previous()}
        />
        <CustomRightArrow
          onClick={() => next()}
          className={
            (props.width > 767 && currentSlide === images.length - 2) ||
            (props.width <= 767 && currentSlide === images.length - 1)
              ? 'disable'
              : ''
          }
        />
      </div>
    )
  }
  return (
    <Carousel
      ssr
      partialVisible={true}
      deviceType={props.deviceType}
      itemClass="item"
      containerClass="office-carousel"
      responsive={responsive}
      transitionDuration={200}
      arrows={false}
      customLeftArrow={<CustomLeftArrow />}
      customButtonGroup={<ButtonGroup />}
    >
      {images.map((image, idx) => {
        return (
          <OfficeCarouselItem
            image={image}
            title={titles[idx]}
            subtitle={subtitles[idx]}
            id={idx}
            key={idx}
          />
        )
      })}
    </Carousel>
  )
})

export default OfficeCarousel
