import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import colors from '../assets/styles/colors'
import { useTranslation, Trans } from 'react-i18next'

import Menu from './Menu'
import HomePage from './pages/HomePage'
import Building from './pages/Building'
import Contact from './pages/Contact'
import Gastro from './pages/Gastro'
import OfficesSection from './pages/OfficesPage'
import Rooftop from './pages/Rooftop'
import Footer from './Footer'
import NotFound from './pages/NotFound'

const App = () => {
  const { t, i18n } = useTranslation('homepage')
  const [width, setWidth] = useState(window.innerWidth)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const updateDimensions = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const header = (
    <Menu
      width={width}
      changeLanguage={changeLanguage}
      curLang={i18n.languages[0]}
    />
  )

  const footer = <Footer colors={colors} width={width} />

  return (
    <>
      <Switch>
        <Route path="/building">
          {header}
          <Building colors={colors} width={width} />
          {footer}
        </Route>
        <Route path="/budova">
          {header}
          <Building colors={colors} width={width} />
          {footer}
        </Route>
        <Route path="/contact">
          {header}
          <Contact />
          {footer}
        </Route>
        <Route path="/kontakt">
          {header}
          <Contact />
          {footer}
        </Route>
        <Route path="/gastro">
          {header}
          <Gastro colors={colors} width={width} />
          {footer}
        </Route>
        <Route path="/offices">
          {header}
          <OfficesSection colors={colors} available={false} width={width} />
          {footer}
        </Route>
        <Route path="/rooftop">
          {header}
          <Rooftop colors={colors} />
          {footer}
        </Route>
        <Route path="/střecha">
          {header}
          <Rooftop colors={colors} />
          {footer}
        </Route>
        <Route exact path="/">
          {header}
          <HomePage width={width} />
          {footer}
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  )
}

export default App
