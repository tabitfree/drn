import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import menuCz from './menu/menuCz.json'
import menuEn from './menu/menuEn.json'
import homepageCz from './homepage/homepageCz'
import homepageEn from './homepage/homepageEn'
import communityCarouselCz from './communityTestimonials/comTesCz.json'
import communityCarouselEn from './communityTestimonials/comTesEn.json'
import buildingCz from './building/buildingCz.json'
import buildingEn from './building/buildingEn.json'
import rooftopCz from './rooftop/rooftopCz.json'
import rooftopEn from './rooftop/rooftopEn.json'
import officesPageCz from './officesPage/officesPageCz.json'
import officesPageEn from './officesPage/officesPageEn.json'
import gastronomyCz from './gastronomy/gastronomyCz.json'
import gastronomyEn from './gastronomy/gastronomyEn.json'
import contactCz from './contact/contactCz.json'
import contactEn from './contact/contactEn.json'
import footerCz from './footer/footerCz.json'
import footerEn from './footer/footerEn.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    whitelist: ['en', 'cz'],
    nonExplicitWhitelist: true,
    load: 'languageOnly',
    fallbackLng: 'en',
    resources: {
      cz: {
        menu: menuCz,
        homepage: homepageCz,
        communityCarousel: communityCarouselCz,
        building: buildingCz,
        rooftop: rooftopCz,
        offices: officesPageCz,
        gastronomy: gastronomyCz,
        contact: contactCz,
        footer: footerCz,
      },
      en: {
        menu: menuEn,
        homepage: homepageEn,
        communityCarousel: communityCarouselEn,
        building: buildingEn,
        rooftop: rooftopEn,
        offices: officesPageEn,
        gastronomy: gastronomyEn,
        contact: contactEn,
        footer: footerEn,
      },
    },
    react: {
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'a', 'u'],
    },
  })
