import React from 'react'
import { useTranslation } from 'react-i18next'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CommunityCarouselItem from './CommunityCarouselItem'

const CommunityCarousel = (props) => {
  const { t } = useTranslation('communityCarousel')
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 90,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 2,
    },
    largerMobile: {
      breakpoint: { max: 767, min: 500 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  }

  const icons = [
    './images/wework-logo.png',
    /*"./images/sebre-logo.png",*/
    './images/nano-logo.svg',
    './images/ctp-logo.jpg',
    './images/gzs-logo.png',
    './images/urarasku-logo.png',
  ]

  const texts = [
    t('wework'),
    /*t("sebre"),*/
    t('nano'),
    t('ctp'),
    t('gzs'),
    t('urarasku'),
  ]

  const websites = [
    'www.wework.com',
    /*"www.sebre.cz",*/
    'www.nanoenergies.cz',
    'www.ctp.eu',
    'www.zdeneksklenar.cz',
    'www.urarasku.cz',
  ]

  return (
    <Carousel
      ssr
      deviceType={props.deviceType}
      itemClass="com-item"
      containerClass="community-carousel"
      responsive={responsive}
      renderButtonGroupOutside={true}
      infinite={true}
      showDots={true}
      swipeable={true}
      draggable={true}
      dotListClass="com-dots"
    >
      {icons.map((icon, idx) => {
        return (
          <CommunityCarouselItem
            icon={icon}
            text={texts[idx]}
            website={websites[idx]}
            colors={props.colors}
            id={idx}
            key={idx}
          />
        )
      })}
    </Carousel>
  )
}

export default CommunityCarousel
