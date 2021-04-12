import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link, withRouter } from 'react-router-dom'

const Menu = (props) => {
  const { t } = useTranslation('menu')
  const link = props.location.pathname
  const [expanded, setExpanded] = useState(false)
  const changeLanguage = props.changeLanguage

  const sectionStyle = (path, width) => {
    return width < 992
      ? 'menu-section-background menu-section mb-0 white-bg'
      : path === '/offices' || path === '/contact'
      ? 'menu-section-background menu-section mb-0'
      : 'menu-section mb-0'
  }

  const navbarStyle = (width) => {
    return width >= 576 ? 'position-absolute w-100' : 'position-relative w-100'
  }

  const containerStyle = (width) => {
    return width >= 576
      ? 'position-relative transparent-container container'
      : 'position-absolute w-100'
  }

  const classNames = (path) => {
    return link === path ? 'px-3 cur-page nav-link' : 'px-3 nav-link'
  }

  return (
    <section className={sectionStyle(link, props.width)}>
      <Container className={containerStyle(props.width)}>
        <Navbar
          bg="transparent"
          className={navbarStyle(props.width)}
          expand="lg"
          expanded={expanded}
        >
          <Link
            to="/"
            onClick={() => setExpanded(false)}
            className="navbar-brand"
          >
            <img
              src={
                props.width > 991
                  ? './images/logo.svg'
                  : './images/logo-black.png'
              }
            />
          </Link>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={(e) => {
              e.preventDefault()
              setExpanded(expanded ? false : 'expanded')
            }}
            className={!expanded ? '' : 'expanded-toggler'}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <div>
              <Nav className="ml-auto">
                <Link
                  to="/building"
                  className={classNames('/building')}
                  onClick={() => setExpanded(false)}
                >
                  {t('building')}
                </Link>
                <Link
                  to="/offices"
                  className={classNames('/offices')}
                  onClick={() => setExpanded(false)}
                >
                  {t('offices')}
                </Link>
                <Link
                  to="/rooftop"
                  className={classNames('/rooftop')}
                  onClick={() => setExpanded(false)}
                >
                  {t('rooftop')}
                </Link>
                <Link
                  to="/gastro"
                  className={classNames('/gastro')}
                  onClick={() => setExpanded(false)}
                >
                  {t('gastro')}
                </Link>
                <Link
                  to="/contact"
                  className={classNames('/contact')}
                  onClick={() => setExpanded(false)}
                >
                  {t('contact')}
                </Link>
                <a
                  onClick={() => {
                    let changeTo = props.curLang == 'en' ? 'cz' : 'en'
                    changeLanguage(changeTo)
                  }}
                  className="px-3 nav-link"
                >
                  {props.curLang == 'en' ? 'cz' : 'en'}
                </a>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </section>
  )
}

export default withRouter(Menu)
