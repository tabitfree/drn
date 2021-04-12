import React, { useRef } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Offices from '../hp-components/Offices'
import Benefits from '../Benefits'
import ExcellentCommunity from '../b-components/ExcellentCommunity'
import Availability from '../Availability'
import { useTranslation } from 'react-i18next'

const OfficesSection = (props) => {
  const { t } = useTranslation('homepage, offices')
  const colors = props.colors
  const available = props.available

  const avaRef = useRef(null)
  const executeScroll = () => avaRef.current.scrollIntoView()

  const officesButton = (
    <div onClick={executeScroll} className="btn dark-variant office-btn">
      {t('homepage:officesBtn')}
    </div>
  )

  return (
    <>
      <Helmet>
        <title>DRN | Offices</title>
      </Helmet>
      <section className="offices">
        <Offices colors={colors} button={officesButton} width={props.width} />
      </section>
      <section className="benefits">
        <Benefits colors={colors} />
      </section>
      <section className="ex-community">
        <ExcellentCommunity
          title={t('offices:companiesTi')}
          text={t('offices:companiesTe')}
          colors={colors}
        />
      </section>
      <section className="availability" ref={avaRef}>
        <Availability available={available} />
      </section>
    </>
  )
}

export default withRouter(OfficesSection)
