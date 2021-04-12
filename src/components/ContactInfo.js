import React from 'react'
import { Container } from 'react-bootstrap'

import ContactInfoContent from './ContactInfoContent'
import ContactForm from './ContactForm'

const ContactInfo = (props) => {
  return (
    <Container className="d-flex">
      <ContactInfoContent />
      <ContactForm />
    </Container>
  )
}

export default ContactInfo
