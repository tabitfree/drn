import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import colors from '../assets/styles/colors';

const FooterContentRow = ({ width }) => {
  const { t } = useTranslation(['footer', 'menu']);
  const pages = [
    t('menu:homepage'),
    t('menu:building'),
    t('menu:offices'),
    t('menu:rooftop'),
    t('menu:gastro'),
    t('menu:contact'),
  ];
  return width < 767 ? (
    <Row>
      <Row>
        <div className='pl-0 mb-4'>
          <p style={{ color: colors.light }}>{t('footer:para')}</p>
        </div>
        <div className='d-flex w-100 list-group-wrapper'>
          <ListGroup className='mr-auto w-50'>
            {pages.slice(0, pages.length / 2).map((page, idx) => (
              <ListGroupItem
                key={idx}
                className='p-0'
                style={{
                  backgroundColor: colors.darkText,
                }}
              >
                <p
                  style={{
                    color: colors.light,
                    fontSize: '16px',
                    lineHeight: '18.7px',
                  }}
                >
                  <Link
                    to={
                      page == 'Contact' || page == 'Kontakt'
                        ? `/contact`
                        : page == 'Kanceláře' || page == 'Offices'
                        ? '/offices'
                        : page == 'Terasa' || page == 'Rooftop'
                        ? '/rooftop'
                        : page == 'Budova' || page == 'Building'
                        ? '/building'
                        : '/'
                    }
                    className='mb-0'
                    style={{ color: colors.light }}
                  >
                    {page.toUpperCase()}
                  </Link>
                </p>
              </ListGroupItem>
            ))}
          </ListGroup>
          <ListGroup className='mr-auto w-50'>
            {pages.slice(pages.length / 2, pages.length).map((page, idx) => (
              <ListGroupItem
                key={idx}
                className='p-0'
                style={{
                  backgroundColor: colors.darkText,
                }}
              >
                <p
                  style={{
                    color: colors.light,
                    fontSize: '16px',
                    lineHeight: '18.7px',
                  }}
                >
                  <Link
                    to={
                      page == 'Contact' || page == 'Kontakt'
                        ? `/contact`
                        : page == 'Kanceláře' || page == 'Offices'
                        ? '/offices'
                        : page == 'Terasa' || page == 'Rooftop'
                        ? '/rooftop'
                        : page == 'Budova' || page == 'Building'
                        ? '/building'
                        : '/'
                    }
                    className='mb-0'
                    style={{ color: colors.light }}
                  >
                    {page.toUpperCase()}
                  </Link>
                </p>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </Row>
      <Row>
        <Col className='footer-social'>
          <p className='text-uppercase footer-contact-small-wrapper'>
            <a
              href='mailto:michaela.machalova@savills.cz'
              style={{
                color: colors.light,
              }}
            >
              info@drn.cz
            </a>
          </p>
          <p className='footer-contact-small-wrapper'>
            <a
              href='tel:+420702187474'
              style={{
                color: colors.light,
              }}
            >
              +420 702 187 474
            </a>
          </p>
          <a
            href='https://www.instagram.com/explore/tags/drnprague/'
            className='display-inline'
            target='_blank'
          >
            <div className='d-flex align-items-center'>
              <img src='./images/instagram.svg' width='25px' />
              <p style={{ color: colors.light }} className='mb-0'>
                #drnprague
              </p>
            </div>
          </a>
        </Col>
        <Col className='footer-address'>
          <p style={{ color: colors.light }}>
            <Trans>{t('address')}</Trans>
          </p>
        </Col>
      </Row>
    </Row>
  ) : (
    <Row>
      <Col className='pl-0 col-4'>
        <p style={{ color: colors.light }}>{t('footer:para')}</p>
      </Col>
      <Col>
        <ListGroup className='mr-auto ml-auto'>
          {pages.map((page, idx) => (
            <ListGroupItem
              key={idx}
              className='p-0'
              style={{
                backgroundColor: colors.darkText,
              }}
            >
              <p
                style={{
                  color: colors.light,
                  fontSize: '16px',
                  lineHeight: '18.7px',
                }}
              >
                <Link
                  to={
                    page == 'Contact' || page == 'Kontakt'
                      ? `/contact`
                      : page == 'Kanceláře' || page == 'Offices'
                      ? '/offices'
                      : page == 'Terasa' || page == 'Rooftop'
                      ? '/rooftop'
                      : page == 'Budova' || page == 'Building'
                      ? '/building'
                      : '/'
                  }
                  className='mb-0'
                  style={{ color: colors.light }}
                >
                  {page}
                </Link>
              </p>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
      <Col className='footer-social'>
        <p className='text-uppercase footer-contact-small-wrapper'>
          <a
            href='mailto:michaela.machalova@savills.cz'
            style={{
              color: colors.light,
            }}
          >
            info@drn.cz
          </a>
        </p>
        <p className='footer-contact-small-wrapper'>
          <a
            href='tel:+420702187474'
            style={{
              color: colors.light,
            }}
          >
            +420 702 187 474
          </a>
        </p>
        <a
          href='https://www.instagram.com/explore/tags/drnprague/'
          className='d-inline-block footer-fb'
          target='_blank'
        >
          <div className='d-flex align-items-center'>
            <img src='./images/instagram.svg' width='25px' />
            <p style={{ color: colors.light }} className='mb-0'>
              #drnprague
            </p>
          </div>
        </a>
      </Col>
      <Col className='footer-address'>
        <p style={{ color: colors.light }}>
          <Trans>{t('address')}</Trans>
        </p>
      </Col>
    </Row>
  );
};

export default FooterContentRow;
