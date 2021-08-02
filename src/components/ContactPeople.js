import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ScrollAnimation from 'react-animate-on-scroll';

const ContactPeople = () => {
  const { t } = useTranslation('contact');
  const people = [
    {
      imgPath: './images/savills-logo.svg',
      name: 'Michaela Semanová',
      function: t('contact2Function'),
      web: 'www.savills.cz',
      mail: 'michaela.semanova@savills.cz',
    },
    {
      imgPath: './images/savills-logo.svg',
      name: 'Markéta Šoltýsová',
      function: t('contact4Function'),
      web: 'www.savills.cz',
      mail: 'marketa.soltysova@savills.cz',
    },
    {
      imgPath: './images/savills-logo.svg',
      name: 'Michaela Machalová',
      function: t('contact5Function'),
      web: 'www.savills.cz',
      mail: 'michaela.machalova@savills.cz',
    },
    {
      imgPath: './images/csm_logo.png',
      name: 'KGAL GmbH & Co. KG',
      function: t('contact3Function'),
      web: 'www.kgal.de',
      mail: 'kgal@kgal.de',
    },
  ];

  return (
    <Container className='contact-people-cont'>
      <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
        <h2>{t('contactsTi')}</h2>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn='fadeIn'
        animateOnce={true}
        className='contact-cards-wrapper d-flex flex-wrap justify-content-center'
      >
        {people.map((person, idx) => (
          <Card
            key={idx}
            className='contact-card d-flex flex-column align-items-center text-center flex-column justify-content-between flex-start'
          >
            <Card.Img
              src={person.imgPath}
              style={{ width: '100%', height: 'auto', maxHeight: '68.56px' }}
            />
            <p className='person-name'>{person.name}</p>
            <p className='person-function'>{person.function}</p>
            {person.function.length < 23 && <br className='mob-none' />}
            <div className='d-flex flex-column'>
              <a href={`https://${person.web}`} target='_blank'>
                {person.web}
              </a>
              <a href={`mailto:${person.mail}`}>{person.mail}</a>
            </div>
          </Card>
        ))}
      </ScrollAnimation>
    </Container>
  );
};

export default ContactPeople;
