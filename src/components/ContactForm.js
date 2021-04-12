import React, { useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import axios from 'axios'
import { useTranslation, Trans } from 'react-i18next'
import ScrollAnimation from 'react-animate-on-scroll'

const ContactForm = () => {
  const { t } = useTranslation('contact')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const onNameChange = (event) => {
    setName(event.target.value)
  }
  const onEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const onNumberChange = (event) => {
    setNumber(event.target.value)
  }
  const onMessageChange = (event) => {
    setMessage(event.target.value)
  }
  const handleShowSuccess = () => setShowSuccess(true)
  const handleCloseSuccess = () => setShowSuccess(false)

  const resetForm = () => {
    setName('')
    setEmail('')
    setNumber('')
    setMessage('')
  }

  const submitEmail = (e) => {
    e.preventDefault()
    axios({
      method: 'POST',
      url: 'https://advertialabs.cz/drn/php/postMail.php',
      data: {
        name: name,
        email: email,
        number: number,
        message: message,
      },
    })
      .then((response) => {
        if (response.data.slice(response.data.length - 7) == 'success') {
          handleShowSuccess()
          resetForm()
        } else if (response.data.slice(response.data.length - 4) == 'fail') {
          alert('Message failed to send.')
        }
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  return (
    <ScrollAnimation
      className="contact-form-wrapper w-50"
      animateIn="fadeIn"
      animateOnce={true}
    >
      <Form onSubmit={submitEmail} method="POST">
        <Form.Label>
          <Trans>{t('formTi')}</Trans>
        </Form.Label>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            placeholder={t('formName')}
            required
            onChange={onNameChange}
            value={name}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder={t('formMail')}
            required
            onChange={onEmailChange}
            value={email}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            placeholder={t('number')}
            value={number}
            onChange={onNumberChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={8}
            placeholder={t('message')}
            required
            onChange={onMessageChange}
            value={message}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check>
            <Form.Check.Label>
              <Form.Check.Input type="checkbox" required />
              <Trans>{t('conditions')}</Trans>
            </Form.Check.Label>
          </Form.Check>
        </Form.Group>
        <Form.Group>
          <Button type="submit" className="btn dark-variant float-right">
            {t('btn')}
          </Button>
        </Form.Group>
        {showSuccess && (
          <p style={{ color: '#28a745', paddingTop: '58px' }}>
            {t('messageSent')}
          </p>
        )}
      </Form>
    </ScrollAnimation>
  )
}

export default ContactForm
